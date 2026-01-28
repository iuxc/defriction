import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { 
  type Course, 
  type Postcode, 
  type TafeQualification,
  type AtarRange,
  getPostcodeData,
  calculateSelectionRank,
  getEligibilityStatus,
  getTafeEligibility,
  courses,
  tafeQualifications,
  atarRanges
} from '../data/mockData';

// User status types
export type UserStatus = 'year12' | 'mature-age' | null;
export type AtarType = 'actual' | 'predicted' | null;

// Step definitions
export type Step = 
  | 'welcome'
  | 'status-select'
  | 'year12-atar-type'
  | 'year12-atar-input'
  | 'year12-postcode'
  | 'year12-course-select'
  | 'year12-results'
  | 'mature-qualification'
  | 'mature-course-select'
  | 'mature-results'
  | 'email-capture'
  | 'international-handoff';

// Result types
export interface Year12Result {
  course: Course;
  selectionRank: number;
  breakdown: { base: number; regional: number; ses: number };
  eligibility: 'eligible' | 'likely' | 'borderline' | 'unlikely' | 'ineligible';
  gap?: number;
  pathwayOption?: string;
}

export interface MatureAgeResult {
  course: Course;
  eligibility: 'direct' | 'pathway' | 'unavailable';
  note?: string;
}

// Context state
interface PathwaysState {
  // Current step
  currentStep: Step;
  
  // User selections
  userStatus: UserStatus;
  isInternational: boolean;
  
  // Year 12 specific
  atarType: AtarType;
  actualAtar: number | null;
  predictedAtarRange: AtarRange | null;
  postcode: string;
  postcodeData: Postcode | null;
  selectedCourseId: string | null;
  
  // Mature age specific
  selectedQualificationId: string | null;
  
  // Results
  year12Results: Year12Result[];
  matureAgeResults: MatureAgeResult[];
  
  // Email capture
  userEmail: string;
}

// Context actions
interface PathwaysActions {
  // Navigation
  goToStep: (step: Step) => void;
  goBack: () => void;
  reset: () => void;
  
  // Status selection
  setUserStatus: (status: UserStatus) => void;
  setIsInternational: (isIntl: boolean) => void;
  
  // Year 12 actions
  setAtarType: (type: AtarType) => void;
  setActualAtar: (atar: number) => void;
  setPredictedAtarRange: (range: AtarRange) => void;
  setPostcode: (postcode: string) => void;
  selectCourse: (courseId: string) => void;
  calculateYear12Results: () => void;
  
  // Mature age actions
  setQualification: (qualId: string) => void;
  calculateMatureAgeResults: () => void;
  
  // Email
  setUserEmail: (email: string) => void;
  
  // Getters
  getAvailableCourses: () => Course[];
  getQualifications: () => TafeQualification[];
  getAtarRanges: () => AtarRange[];
}

type PathwaysContextType = PathwaysState & PathwaysActions;

const PathwaysContext = createContext<PathwaysContextType | null>(null);

// Step history for back navigation
const stepHistory: Step[] = [];

const initialState: PathwaysState = {
  currentStep: 'welcome',
  userStatus: null,
  isInternational: false,
  atarType: null,
  actualAtar: null,
  predictedAtarRange: null,
  postcode: '',
  postcodeData: null,
  selectedCourseId: null,
  selectedQualificationId: null,
  year12Results: [],
  matureAgeResults: [],
  userEmail: '',
};

export function PathwaysProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PathwaysState>(initialState);

  // Navigation
  const goToStep = useCallback((step: Step) => {
    stepHistory.push(state.currentStep);
    setState(prev => ({ ...prev, currentStep: step }));
  }, [state.currentStep]);

  const goBack = useCallback(() => {
    const previousStep = stepHistory.pop();
    if (previousStep) {
      setState(prev => ({ ...prev, currentStep: previousStep }));
    }
  }, []);

  const reset = useCallback(() => {
    stepHistory.length = 0;
    setState(initialState);
  }, []);

  // Status selection
  const setUserStatus = useCallback((status: UserStatus) => {
    setState(prev => ({ ...prev, userStatus: status }));
  }, []);

  const setIsInternational = useCallback((isIntl: boolean) => {
    setState(prev => ({ ...prev, isInternational: isIntl }));
  }, []);

  // Year 12 actions
  const setAtarType = useCallback((type: AtarType) => {
    setState(prev => ({ ...prev, atarType: type }));
  }, []);

  const setActualAtar = useCallback((atar: number) => {
    setState(prev => ({ ...prev, actualAtar: atar }));
  }, []);

  const setPredictedAtarRange = useCallback((range: AtarRange) => {
    setState(prev => ({ ...prev, predictedAtarRange: range }));
  }, []);

  const setPostcode = useCallback((postcode: string) => {
    const postcodeData = getPostcodeData(postcode);
    setState(prev => ({ ...prev, postcode, postcodeData: postcodeData || null }));
  }, []);

  const selectCourse = useCallback((courseId: string) => {
    setState(prev => ({ ...prev, selectedCourseId: courseId }));
  }, []);

  const calculateYear12Results = useCallback(() => {
    const results: Year12Result[] = [];
    const isPredicted = state.atarType === 'predicted';
    
    // Calculate base ATAR (use midpoint for predicted)
    let baseAtar: number;
    if (isPredicted && state.predictedAtarRange) {
      baseAtar = (state.predictedAtarRange.min + state.predictedAtarRange.max) / 2;
    } else {
      baseAtar = state.actualAtar || 0;
    }
    
    // Calculate selection rank
    const { total: selectionRank, breakdown } = calculateSelectionRank(baseAtar, state.postcodeData || undefined);
    
    // Calculate results for all courses
    for (const course of courses) {
      const eligibility = getEligibilityStatus(
        selectionRank,
        course.cutoff,
        isPredicted,
        state.predictedAtarRange || undefined
      );
      
      const gap = selectionRank < course.cutoff ? course.cutoff - selectionRank : undefined;
      
      let pathwayOption: string | undefined;
      if (eligibility === 'ineligible' || eligibility === 'unlikely') {
        // Suggest Monash College pathway
        pathwayOption = `Monash College Diploma pathway available`;
      }
      
      results.push({
        course,
        selectionRank,
        breakdown,
        eligibility,
        gap,
        pathwayOption
      });
    }
    
    setState(prev => ({ ...prev, year12Results: results }));
  }, [state.atarType, state.actualAtar, state.predictedAtarRange, state.postcodeData]);

  // Mature age actions
  const setQualification = useCallback((qualId: string) => {
    setState(prev => ({ ...prev, selectedQualificationId: qualId }));
  }, []);

  const calculateMatureAgeResults = useCallback(() => {
    if (!state.selectedQualificationId) return;
    
    const results: MatureAgeResult[] = [];
    
    for (const course of courses) {
      const { status, note } = getTafeEligibility(state.selectedQualificationId, course.id);
      results.push({
        course,
        eligibility: status,
        note
      });
    }
    
    setState(prev => ({ ...prev, matureAgeResults: results }));
  }, [state.selectedQualificationId]);

  // Email
  const setUserEmail = useCallback((email: string) => {
    setState(prev => ({ ...prev, userEmail: email }));
  }, []);

  // Getters
  const getAvailableCourses = useCallback(() => courses, []);
  const getQualifications = useCallback(() => tafeQualifications, []);
  const getAtarRanges = useCallback(() => atarRanges, []);

  const value: PathwaysContextType = {
    ...state,
    goToStep,
    goBack,
    reset,
    setUserStatus,
    setIsInternational,
    setAtarType,
    setActualAtar,
    setPredictedAtarRange,
    setPostcode,
    selectCourse,
    calculateYear12Results,
    setQualification,
    calculateMatureAgeResults,
    setUserEmail,
    getAvailableCourses,
    getQualifications,
    getAtarRanges,
  };

  return (
    <PathwaysContext.Provider value={value}>
      {children}
    </PathwaysContext.Provider>
  );
}

export function usePathways() {
  const context = useContext(PathwaysContext);
  if (!context) {
    throw new Error('usePathways must be used within a PathwaysProvider');
  }
  return context;
}
