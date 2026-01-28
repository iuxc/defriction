// Mock Database for Pathways Finder Prototype
// This data structure supports the conditional logic validation

export interface Course {
  id: string;
  name: string;
  cutoff: number;
  vtacCode: string;
  tafeEligibility: 'direct' | 'pathway' | 'unavailable';
  tafePathwayNote?: string;
  acceptedTafeQuals: string[];
}

export interface Postcode {
  code: string;
  region: string;
  isRegional: boolean;
  regionalBonus: number;
  isLowSES: boolean;
  sesBonus: number;
}

export interface TafeQualification {
  id: string;
  name: string;
  level: 'certificate-iii' | 'certificate-iv' | 'diploma' | 'advanced-diploma';
  field: string;
}

export interface AtarRange {
  id: string;
  label: string;
  min: number;
  max: number;
}

// Course Data
export const courses: Course[] = [
  {
    id: 'nursing',
    name: 'Bachelor of Nursing',
    cutoff: 70,
    vtacCode: '2800311841',
    tafeEligibility: 'pathway',
    tafePathwayNote: 'Requires Ahpra Registration pathway. Diploma of Nursing graduates must complete competency-based assessment.',
    acceptedTafeQuals: ['diploma-nursing']
  },
  {
    id: 'commerce',
    name: 'Bachelor of Commerce',
    cutoff: 85,
    vtacCode: '2800312345',
    tafeEligibility: 'direct',
    acceptedTafeQuals: ['diploma-business', 'diploma-accounting', 'advanced-diploma-accounting']
  },
  {
    id: 'arts',
    name: 'Bachelor of Arts',
    cutoff: 60,
    vtacCode: '2800311234',
    tafeEligibility: 'direct',
    acceptedTafeQuals: ['diploma-business', 'diploma-community-services', 'diploma-graphic-design']
  },
  {
    id: 'engineering',
    name: 'Bachelor of Engineering (Honours)',
    cutoff: 90,
    vtacCode: '2800315678',
    tafeEligibility: 'pathway',
    tafePathwayNote: 'Requires completion of Monash College Diploma of Engineering first.',
    acceptedTafeQuals: []
  },
  {
    id: 'it',
    name: 'Bachelor of Information Technology',
    cutoff: 75,
    vtacCode: '2800314567',
    tafeEligibility: 'direct',
    acceptedTafeQuals: ['diploma-it', 'advanced-diploma-it', 'diploma-software-dev']
  }
];

// Postcode Data (Victorian focus)
export const postcodes: Postcode[] = [
  // Regional postcodes (eligible for +5 points)
  { code: '2830', region: 'Dubbo NSW', isRegional: true, regionalBonus: 5, isLowSES: true, sesBonus: 3 },
  { code: '3350', region: 'Ballarat VIC', isRegional: true, regionalBonus: 5, isLowSES: false, sesBonus: 0 },
  { code: '3550', region: 'Bendigo VIC', isRegional: true, regionalBonus: 5, isLowSES: false, sesBonus: 0 },
  { code: '3630', region: 'Shepparton VIC', isRegional: true, regionalBonus: 5, isLowSES: true, sesBonus: 3 },
  { code: '3820', region: 'Warragul VIC', isRegional: true, regionalBonus: 5, isLowSES: false, sesBonus: 0 },
  { code: '3840', region: 'Traralgon VIC', isRegional: true, regionalBonus: 5, isLowSES: true, sesBonus: 3 },
  
  // Metro postcodes (no bonus)
  { code: '3000', region: 'Melbourne CBD', isRegional: false, regionalBonus: 0, isLowSES: false, sesBonus: 0 },
  { code: '3004', region: 'St Kilda Road', isRegional: false, regionalBonus: 0, isLowSES: false, sesBonus: 0 },
  { code: '3121', region: 'Richmond VIC', isRegional: false, regionalBonus: 0, isLowSES: false, sesBonus: 0 },
  { code: '3145', region: 'Caulfield VIC', isRegional: false, regionalBonus: 0, isLowSES: false, sesBonus: 0 },
  { code: '3168', region: 'Clayton VIC', isRegional: false, regionalBonus: 0, isLowSES: false, sesBonus: 0 },
  
  // Low SES metro postcodes
  { code: '3021', region: 'St Albans VIC', isRegional: false, regionalBonus: 0, isLowSES: true, sesBonus: 3 },
  { code: '3029', region: 'Hoppers Crossing VIC', isRegional: false, regionalBonus: 0, isLowSES: true, sesBonus: 3 },
  { code: '3064', region: 'Craigieburn VIC', isRegional: false, regionalBonus: 0, isLowSES: true, sesBonus: 3 },
  { code: '3175', region: 'Dandenong VIC', isRegional: false, regionalBonus: 0, isLowSES: true, sesBonus: 3 },
];

// TAFE Qualifications
export const tafeQualifications: TafeQualification[] = [
  { id: 'diploma-nursing', name: 'Diploma of Nursing', level: 'diploma', field: 'Health' },
  { id: 'diploma-business', name: 'Diploma of Business', level: 'diploma', field: 'Business' },
  { id: 'diploma-accounting', name: 'Diploma of Accounting', level: 'diploma', field: 'Business' },
  { id: 'advanced-diploma-accounting', name: 'Advanced Diploma of Accounting', level: 'advanced-diploma', field: 'Business' },
  { id: 'diploma-community-services', name: 'Diploma of Community Services', level: 'diploma', field: 'Community' },
  { id: 'diploma-graphic-design', name: 'Diploma of Graphic Design', level: 'diploma', field: 'Creative' },
  { id: 'diploma-it', name: 'Diploma of Information Technology', level: 'diploma', field: 'IT' },
  { id: 'advanced-diploma-it', name: 'Advanced Diploma of IT', level: 'advanced-diploma', field: 'IT' },
  { id: 'diploma-software-dev', name: 'Diploma of Software Development', level: 'diploma', field: 'IT' },
  { id: 'cert-iv-aged-care', name: 'Certificate IV in Aged Care', level: 'certificate-iv', field: 'Health' },
];

// ATAR Ranges for Predicted scores
export const atarRanges: AtarRange[] = [
  { id: 'range-90-99', label: '90.00 - 99.95', min: 90, max: 99.95 },
  { id: 'range-80-89', label: '80.00 - 89.99', min: 80, max: 89.99 },
  { id: 'range-70-79', label: '70.00 - 79.99', min: 70, max: 79.99 },
  { id: 'range-60-69', label: '60.00 - 69.99', min: 60, max: 69.99 },
  { id: 'range-50-59', label: '50.00 - 59.99', min: 50, max: 59.99 },
  { id: 'range-below-50', label: 'Below 50.00', min: 0, max: 49.99 },
];

// Helper functions
export function getPostcodeData(code: string): Postcode | undefined {
  return postcodes.find(p => p.code === code);
}

export function calculateSelectionRank(
  baseAtar: number,
  postcode: Postcode | undefined
): { total: number; breakdown: { base: number; regional: number; ses: number } } {
  const regional = postcode?.regionalBonus || 0;
  const ses = postcode?.sesBonus || 0;
  
  return {
    total: Math.min(baseAtar + regional + ses, 99.95), // Cap at 99.95
    breakdown: {
      base: baseAtar,
      regional,
      ses
    }
  };
}

export function getEligibilityStatus(
  selectionRank: number,
  courseCutoff: number,
  isPredicted: boolean,
  atarRange?: AtarRange
): 'eligible' | 'likely' | 'borderline' | 'unlikely' | 'ineligible' {
  if (!isPredicted) {
    // Actual ATAR - definitive answer
    return selectionRank >= courseCutoff ? 'eligible' : 'ineligible';
  }
  
  // Predicted ATAR - use range logic
  if (!atarRange) return 'ineligible';
  
  const maxPossible = Math.min(atarRange.max + 8, 99.95); // Max possible with bonuses
  const minPossible = atarRange.min;
  
  if (minPossible >= courseCutoff) {
    return 'likely'; // Even minimum meets cutoff
  } else if (maxPossible >= courseCutoff && minPossible >= courseCutoff - 10) {
    return 'borderline'; // Could go either way
  } else if (maxPossible >= courseCutoff) {
    return 'unlikely'; // Only if they hit top of range with bonuses
  }
  return 'ineligible';
}

export function getTafeEligibility(
  qualificationId: string,
  courseId: string
): { status: 'direct' | 'pathway' | 'unavailable'; note?: string } {
  const course = courses.find(c => c.id === courseId);
  if (!course) return { status: 'unavailable' };
  
  if (course.acceptedTafeQuals.includes(qualificationId)) {
    if (course.tafeEligibility === 'pathway') {
      return { status: 'pathway', note: course.tafePathwayNote };
    }
    return { status: 'direct' };
  }
  
  // Check if the course accepts any TAFE at all
  if (course.tafeEligibility === 'unavailable' || course.acceptedTafeQuals.length === 0) {
    return { status: 'unavailable', note: 'This course does not accept TAFE qualifications for direct entry.' };
  }
  
  return { status: 'pathway', note: `Your qualification is not directly articulated. Consider: ${course.tafePathwayNote || 'Contact admissions for pathway options.'}` };
}

// Monash College Diploma data
export const monashCollegeDiplomas = [
  { id: 'mc-arts', name: 'Diploma of Arts', minAtar: 50, guaranteedEntry: 'Bachelor of Arts' },
  { id: 'mc-business', name: 'Diploma of Business', minAtar: 55, guaranteedEntry: 'Bachelor of Business' },
  { id: 'mc-engineering', name: 'Diploma of Engineering', minAtar: 60, guaranteedEntry: 'Bachelor of Engineering (Honours)' },
  { id: 'mc-it', name: 'Diploma of Information Technology', minAtar: 55, guaranteedEntry: 'Bachelor of Information Technology' },
  { id: 'mc-science', name: 'Diploma of Science', minAtar: 55, guaranteedEntry: 'Bachelor of Science' },
];
