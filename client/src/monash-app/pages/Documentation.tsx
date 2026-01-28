import { useState, useEffect } from 'react';
import { Search, ChevronRight, ExternalLink, BookOpen, GitBranch, AlertCircle, Database, Code, Users } from 'lucide-react';

// Search data for the documentation
const searchData = [
  { title: 'Introduction', section: 'Overview', id: 'introduction', keywords: 'pathways finder tool information architecture' },
  { title: 'Revision Notes', section: 'Overview', id: 'revision-notes', keywords: 'v2 changes issues fixes' },
  { title: 'Master Flow Diagram', section: 'User Flows', id: 'master-flow', keywords: 'flow diagram routes year12 tafe mature international' },
  { title: 'Route A: Year 12', section: 'User Flows', id: 'route-a', keywords: 'atar selection rank predicted actual postcode' },
  { title: 'Route B: TAFE', section: 'User Flows', id: 'route-b', keywords: 'tafe vet qualification diploma certificate partial match badges' },
  { title: 'Route C: Mature Age', section: 'User Flows', id: 'route-c', keywords: 'mature age ghost field no atar work experience' },
  { title: 'Route D: International', section: 'User Flows', id: 'route-d', keywords: 'international warm handoff advisor chat booking' },
  { title: 'States Overview', section: 'State Definitions', id: 'states-overview', keywords: 'all states s0 s1 s2 s3 s4 s5 s6 s7 s8' },
  { title: 'Bridge Visualization', section: 'State Definitions', id: 'bridge-viz', keywords: 'bridge gap visualization monash college pathway' },
  { title: 'Soft Rejection', section: 'Edge Cases', id: 'soft-rejection', keywords: 'soft rejection no pathway alternatives' },
  { title: 'Data Requirements', section: 'Data & Logic', id: 'data-requirements', keywords: 'data input backend courses postcodes' },
];

// Navigation structure
const navSections = [
  {
    title: 'Overview',
    items: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'revision-notes', label: 'Revision Notes' },
    ]
  },
  {
    title: 'User Flows',
    items: [
      { id: 'master-flow', label: 'Master Flow Diagram' },
      { id: 'route-a', label: 'Route A: Year 12' },
      { id: 'route-b', label: 'Route B: TAFE' },
      { id: 'route-c', label: 'Route C: Mature Age' },
      { id: 'route-d', label: 'Route D: International' },
    ]
  },
  {
    title: 'State Definitions',
    items: [
      { id: 'states-overview', label: 'States Overview' },
      { id: 'bridge-viz', label: 'Bridge Visualization' },
    ]
  },
  {
    title: 'Edge Cases',
    items: [
      { id: 'soft-rejection', label: 'Soft Rejection' },
    ]
  },
  {
    title: 'Data & Logic',
    items: [
      { id: 'data-requirements', label: 'Data Requirements' },
    ]
  },
];
import { FooterContact } from '@/components/FooterContact';

export default function Documentation() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'introduction';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || 'introduction';
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredResults = searchQuery.trim()
    ? searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.section.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-vapor-grey text-slate-700">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/10 text-white">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-6">
            <a href="/" className="text-xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">defriction</span>
            </a>
            
            <div className="h-6 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#006DAE] to-[#003399] flex items-center justify-center rounded-sm">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-semibold text-white">Pathways Finder</span>
                <span className="text-gray-400 text-xs">IA Specification</span>
              </div>
            </div>
            <span className="px-2 py-0.5 text-xs font-medium bg-[#006DAE]/20 text-[#006DAE] border border-[#006DAE]/30 rounded">v2.0</span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button 
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 text-gray-400 hover:border-white/20 hover:text-white transition-colors w-64 rounded-md"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm">Search docs...</span>
              <kbd className="ml-auto px-2 py-0.5 text-xs bg-white/10 border border-white/10 rounded text-gray-400">⌘K</kbd>
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSearchOpen(false)} />
          <div className="relative max-w-2xl mx-auto mt-24">
            <div className="bg-white border border-slate-200 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200">
                <Search className="w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search states, components, edge cases..."
                  className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 outline-none text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <kbd className="px-2 py-0.5 text-xs bg-white border border-slate-200 text-slate-500">ESC</kbd>
              </div>
              <div className="max-h-96 overflow-y-auto p-2">
                {!searchQuery.trim() ? (
                  <div className="text-center py-8 text-slate-400">Start typing to search...</div>
                ) : filteredResults.length === 0 ? (
                  <div className="text-center py-8 text-slate-400">No results found</div>
                ) : (
                  filteredResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 hover:bg-slate-100 transition-colors"
                    >
                      <div className="text-slate-900 font-medium">{item.title}</div>
                      <div className="text-sm text-slate-400">{item.section}</div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="flex pt-16">
        {/* Sidebar Navigation */}
        <nav className="fixed left-0 top-16 bottom-0 w-64 bg-white/50 border-r border-slate-200 overflow-y-auto p-4">
          <div className="space-y-6">
            {navSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                          activeSection === item.id
                            ? 'text-slate-900 bg-monash-blue/10 border-l-2 border-monash-blue'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 max-w-4xl">
          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-monash-blue/15 text-monash-blue border border-monash-blue/30">OVERVIEW</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Pathways Finder Tool</h1>
            <p className="text-xl text-slate-500 mb-8">Information Architecture & User Flow Specification</p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              This document provides the complete information architecture for the "Pathways Finder" tool, a dynamic, logic-driven UI component designed to replace the current static, fragmented pathway information on the Monash University website. The architecture is informed by the forensic audit conducted on the existing site and aligns with the Creative Brief requirements.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 p-4 hover:border-slate-300 transition-all hover:-translate-y-0.5">
                <div className="text-3xl font-bold text-slate-900">4</div>
                <div className="text-sm text-slate-500">User Routes</div>
              </div>
              <div className="bg-white border border-slate-200 p-4 hover:border-slate-300 transition-all hover:-translate-y-0.5">
                <div className="text-3xl font-bold text-slate-900">24</div>
                <div className="text-sm text-slate-500">States Defined</div>
              </div>
              <div className="bg-white border border-slate-200 p-4 hover:border-slate-300 transition-all hover:-translate-y-0.5">
                <div className="text-3xl font-bold text-slate-900">5</div>
                <div className="text-sm text-slate-500">Edge Cases</div>
              </div>
              <div className="bg-white border border-slate-200 p-4 hover:border-slate-300 transition-all hover:-translate-y-0.5">
                <div className="text-3xl font-bold text-slate-900">v2.0</div>
                <div className="text-sm text-slate-500">Revision</div>
              </div>
            </div>
          </section>

          {/* Revision Notes */}
          <section id="revision-notes" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Revision Notes</h2>
            <p className="text-slate-500 mb-6">Version 2.0 addresses five critical UX gaps identified in the design review:</p>
            
            <div className="overflow-hidden border border-slate-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-white">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider w-20">Issue</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Problem</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Resolution</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-white/5">
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 border border-red-300">#1</span></td>
                    <td className="px-4 py-3 text-slate-600">TAFE "Route B" hides ineligible courses without explanation</td>
                    <td className="px-4 py-3 text-slate-500">Added "Partial Match" state with "Pathway Required" badges</td>
                  </tr>
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 border border-red-300">#2</span></td>
                    <td className="px-4 py-3 text-slate-600">Selection Rank visualization demoralizes failure cases</td>
                    <td className="px-4 py-3 text-slate-500">Added "Bridge Visualization" for gap states</td>
                  </tr>
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs bg-amber-100 text-amber-700 border border-amber-300">#3</span></td>
                    <td className="px-4 py-3 text-slate-600">Predicted ATAR midpoint logic creates false negatives</td>
                    <td className="px-4 py-3 text-slate-500">Changed to "Likelihood" language with soft eligibility bands</td>
                  </tr>
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs bg-amber-100 text-amber-700 border border-amber-300">#4</span></td>
                    <td className="px-4 py-3 text-slate-600">No mechanism to save progress or capture leads</td>
                    <td className="px-4 py-3 text-slate-500">Added Step 7: "Email My Pathway" with lead capture</td>
                  </tr>
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs bg-monash-blue/15 text-monash-blue border border-monash-blue/30">#5</span></td>
                    <td className="px-4 py-3 text-slate-600">International students hit a dead end</td>
                    <td className="px-4 py-3 text-slate-500">Added warm handoff to Global Advisor with chat option</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Master Flow */}
          <section id="master-flow" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-monash-blue/15 text-monash-blue border border-monash-blue/30">USER FLOWS</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Master Flow Diagram</h2>
            <p className="text-slate-500 mb-6">The tool uses a progressive disclosure model, revealing only the fields relevant to each user's situation.</p>
            
            <div className="bg-white border border-slate-200 p-4 overflow-x-auto mb-8">
              <pre className="font-mono text-xs text-green-700 whitespace-pre leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────────────────┐
│                         PATHWAYS FINDER: ENTRY POINT                        │
│                                                                             │
│  "Let's find your best pathway to Monash."                                  │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     STEP 1: THE FILTER (Status Selection)                   │
│                                                                             │
│  Q: "What best describes you?"                                              │
│                                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Year 12    │  │ TAFE/VET    │  │ Mature Age  │  │International│        │
│  │  Student    │  │  Graduate   │  │  (No ATAR)  │  │  Student    │        │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│         │                │                │                │               │
└─────────┼────────────────┼────────────────┼────────────────┼───────────────┘
          │                │                │                │
          ▼                ▼                ▼                ▼
    ┌─────────┐      ┌─────────┐      ┌─────────┐      ┌─────────┐
    │ ROUTE A │      │ ROUTE B │      │ ROUTE C │      │ ROUTE D │
    │ Year 12 │      │  TAFE   │      │ Mature  │      │  Intl   │
    └─────────┘      └─────────┘      └─────────┘      └─────────┘`}
              </pre>
            </div>

            {/* Route Cards */}
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => scrollToSection('route-a')} className="bg-white border border-slate-200 p-6 text-left hover:border-slate-300 transition-all hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center">
                    <span className="text-monash-blue font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Route A: Year 12</h3>
                    <p className="text-sm text-slate-400">ATAR-based entry</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">Selection Rank calculation, Predicted vs Actual ATAR toggle, Bridge visualization for gap states.</p>
              </button>
              
              <button onClick={() => scrollToSection('route-b')} className="bg-white border border-slate-200 p-6 text-left hover:border-slate-300 transition-all hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-700 font-bold">B</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Route B: TAFE</h3>
                    <p className="text-sm text-slate-400">VET qualification entry</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">Partial match badges, articulation pathways, credit transfer visualization.</p>
              </button>
              
              <button onClick={() => scrollToSection('route-c')} className="bg-white border border-slate-200 p-6 text-left hover:border-slate-300 transition-all hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 flex items-center justify-center">
                    <span className="text-green-700 font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Route C: Mature Age</h3>
                    <p className="text-sm text-slate-400">Non-ATAR entry</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">Ghost field logic (ATAR hidden), work experience assessment, pathway programs.</p>
              </button>
              
              <button onClick={() => scrollToSection('route-d')} className="bg-white border border-slate-200 p-6 text-left hover:border-slate-300 transition-all hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-800 font-bold">D</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Route D: International</h3>
                    <p className="text-sm text-slate-400">Warm handoff</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">Live chat, booking system, country-specific guide email capture.</p>
              </button>
            </div>
          </section>

          {/* Route A */}
          <section id="route-a" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-monash-blue">ROUTE A</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Year 12 Student Flow</h2>
            
            <div className="bg-white border border-slate-200 p-4 overflow-x-auto mb-8">
              <pre className="font-mono text-xs text-monash-blue whitespace-pre leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────────────────┐
│              STEP 2A: ATAR TYPE TOGGLE (The "Predicted" Toggle)             │
│                                                                             │
│  Q: "Do you have your final ATAR, or are you using a predicted score?"      │
│                                                                             │
│  ┌──────────────────────┐    ┌──────────────────────┐                       │
│  │   ○ Predicted ATAR   │    │   ○ Actual ATAR      │                       │
│  │     (Range Input)    │    │    (Exact Input)     │                       │
│  └──────────────────────┘    └──────────────────────┘                       │
└─────────────────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>

            {/* Selection Rank Calculation */}
            <div className="bg-white border border-slate-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-[#006DAE]" />
                Selection Rank Calculation
              </h3>
              <div className="bg-white border border-slate-200 p-4">
                <pre className="font-mono text-sm text-slate-600">
{`function calculateSelectionRank(atar, postcode) {
  let rank = atar;
  
  // Regional adjustment (+5 points)
  if (isRegionalPostcode(postcode)) {
    rank += 5;
  }
  
  // Low SES adjustment (+3 points)
  if (isLowSESPostcode(postcode)) {
    rank += 3;
  }
  
  return Math.min(rank, 99.95); // Cap at 99.95
}`}
                </pre>
              </div>
            </div>

            {/* Eligibility Bands */}
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Predicted ATAR Eligibility Bands</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-500/10 border border-green-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-semibold text-green-700">LIKELY ELIGIBLE</span>
                </div>
                <p className="text-sm text-slate-500 font-mono">range_low ≥ cutoff</p>
                <p className="text-xs text-slate-400 mt-2">"Based on your predicted range, you are likely eligible"</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="font-semibold text-amber-700">BORDERLINE</span>
                </div>
                <p className="text-sm text-slate-500 font-mono">range_low &lt; cutoff ≤ range_high</p>
                <p className="text-xs text-slate-400 mt-2">"You're in the borderline zone—your final ATAR could go either way"</p>
              </div>
              <div className="bg-red-500/10 border border-red-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="font-semibold text-red-700">UNLIKELY</span>
                </div>
                <p className="text-sm text-slate-500 font-mono">range_high &lt; cutoff</p>
                <p className="text-xs text-slate-400 mt-2">"Direct entry is unlikely with this range, but pathways exist"</p>
              </div>
            </div>
          </section>

          {/* Route B */}
          <section id="route-b" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700">ROUTE B</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">TAFE Graduate Flow</h2>
            
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Partial Match Badge System</h3>
            <p className="text-slate-500 mb-6">Courses are never hidden. Instead, they display badges explaining the user's eligibility status.</p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-green-300 p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-700 text-lg">✓</span>
                  <span className="font-semibold text-green-700">DIRECT ENTRY</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">Your qualification articulates directly to this course.</p>
                <div className="bg-slate-100 p-2 overflow-x-auto">
                  <code className="text-xs text-slate-600 whitespace-nowrap">course.accepts_tafe_field.includes(user_field)</code>
                </div>
              </div>
              <div className="bg-white border border-amber-300 p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-amber-700 text-lg">◐</span>
                  <span className="font-semibold text-amber-700">PATHWAY REQUIRED</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">Requires additional steps—see pathway options.</p>
                <div className="bg-slate-100 p-2 overflow-x-auto">
                  <code className="text-xs text-slate-600 whitespace-nowrap">course.pathway_available == true</code>
                </div>
              </div>
              <div className="bg-white border border-slate-300 p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-slate-500 text-lg">○</span>
                  <span className="font-semibold text-slate-500">NOT AVAILABLE</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">No pathway exists from your qualification.</p>
                <div className="bg-slate-100 p-2 overflow-x-auto">
                  <code className="text-xs text-slate-600 whitespace-nowrap">course.pathway_available == false</code>
                </div>
              </div>
            </div>
          </section>

          {/* Route C */}
          <section id="route-c" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700">ROUTE C</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Mature Age Flow</h2>
            
            <div className="bg-white border border-slate-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-green-700" />
                Ghost Field Logic
              </h3>
              <p className="text-slate-500 mb-4">When user selects "Mature Age", the ATAR input fields are <strong className="text-slate-900">physically removed from the DOM</strong>, not just hidden or disabled.</p>
              
              <div className="bg-white border border-slate-200 p-4">
                <pre className="font-mono text-sm text-slate-600">
{`// Ghost Field Implementation
{userStatus !== 'mature_age' && (
  <ATARInputSection />
)}

// The ATAR section does not exist in the DOM for mature age users
// This prevents confusion and simplifies the form`}
                </pre>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-4">Mature Age Qualification Options</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006DAE]"></span>
                Previous university study (incomplete degree)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006DAE]"></span>
                TAFE Certificate IV or higher
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006DAE]"></span>
                Relevant work experience (2+ years)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006DAE]"></span>
                Special Entry Access Scheme (SEAS)
              </li>
            </ul>
          </section>

          {/* Route D */}
          <section id="route-d" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800">ROUTE D</span>
              <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700 border border-amber-300">REVISED</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">International Student Warm Handoff</h2>
            
            <div className="bg-[#F4F7FA] border-l-4 border-l-[#006DAE] p-6 mb-8">
              <p className="text-slate-600 mb-4">
                <strong className="text-slate-900">Critical UX Principle:</strong> International students are high-value prospects. The tool provides a warm, welcoming handoff rather than a dead end.
              </p>
              <p className="text-slate-500 text-sm">
                Tone: "Welcome, International Student. Our Global Advisors can create a personalized pathway just for you."
              </p>
            </div>
            
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Handoff Options</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200 p-4">
                <div className="text-2xl mb-2">💬</div>
                <h4 className="font-semibold text-slate-900 mb-2">Live Chat</h4>
                <p className="text-sm text-slate-500">Connect instantly with a Global Advisor. Available Mon-Fri, 9am-5pm AEST.</p>
              </div>
              <div className="bg-white border border-slate-200 p-4">
                <div className="text-2xl mb-2">📅</div>
                <h4 className="font-semibold text-slate-900 mb-2">Book a Call</h4>
                <p className="text-sm text-slate-500">Schedule a 15-minute consultation at a time that works for your timezone.</p>
              </div>
              <div className="bg-white border border-slate-200 p-4">
                <div className="text-2xl mb-2">🔗</div>
                <h4 className="font-semibold text-slate-900 mb-2">Self-Serve</h4>
                <p className="text-sm text-slate-500">Explore country-specific entry requirements, English tests, and scholarships.</p>
              </div>
            </div>
          </section>

          {/* States Overview */}
          <section id="states-overview" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-monash-blue/15 text-monash-blue border border-monash-blue/30">STATE DEFINITIONS</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">All States Overview</h2>
            
            <div className="overflow-hidden border border-slate-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-white">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">State ID</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-white/5">
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><code className="text-[#006DAE]">S0</code></td>
                    <td className="px-4 py-3 text-slate-900">Welcome_Screen</td>
                    <td className="px-4 py-3 text-slate-500">Entry point with value proposition</td>
                  </tr>
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><code className="text-[#006DAE]">S1</code></td>
                    <td className="px-4 py-3 text-slate-900">Filter_Status</td>
                    <td className="px-4 py-3 text-slate-500">Status selection (Year 12 / TAFE / Mature / Intl)</td>
                  </tr>
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><code className="text-[#006DAE]">S2A</code></td>
                    <td className="px-4 py-3 text-slate-900">Input_ATAR_Toggle</td>
                    <td className="px-4 py-3 text-slate-500">Predicted vs Actual ATAR selection</td>
                  </tr>
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><code className="text-amber-700">S5A_ALT</code></td>
                    <td className="px-4 py-3 text-slate-900">Viz_Selection_Rank_Bridge <span className="ml-2 px-1 text-xs bg-amber-100 text-amber-700 border border-amber-300">NEW</span></td>
                    <td className="px-4 py-3 text-slate-500">Bridge visualization for gap users</td>
                  </tr>
                  <tr className="hover:bg-monash-blue/5">
                    <td className="px-4 py-3"><code className="text-amber-700">S7</code></td>
                    <td className="px-4 py-3 text-slate-900">Email_My_Pathway <span className="ml-2 px-1 text-xs bg-amber-100 text-amber-700 border border-amber-300">NEW</span></td>
                    <td className="px-4 py-3 text-slate-500">Lead capture with email summary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Bridge Visualization */}
          <section id="bridge-viz" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700 border border-amber-300">NEW STATE</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">S5A-ALT: Bridge Visualization</h2>
            
            <p className="text-slate-500 mb-6">
              <strong className="text-slate-900">Problem solved:</strong> The original "short bar" visualization for users below the cutoff was demoralizing. The Bridge Visualization reframes the gap as an opportunity.
            </p>
            
            <div className="bg-white border border-slate-200 p-4 overflow-x-auto mb-8">
              <pre className="font-mono text-xs text-amber-700 whitespace-pre leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  YOUR PATHWAY TO BACHELOR OF NURSING                            │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  YOUR RANK        THE GAP         COURSE REQUIREMENT      │  │
│  │                                                           │  │
│  │  ┌─────────┐    ┌─────────┐      ┌─────────┐             │  │
│  │  │         │    │ BRIDGE  │      │         │             │  │
│  │  │   55    │ →  │   +15   │  →   │   70    │             │  │
│  │  │         │    │         │      │         │             │  │
│  │  └─────────┘    └─────────┘      └─────────┘             │  │
│  │                                                           │  │
│  │  ████████████   ░░░░░░░░░░░      ████████████████████████ │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  🌉 HOW TO BRIDGE THE GAP                                       │
│                                                                 │
│  Monash College Diploma can add up to +20 points                │
│  to your Selection Rank upon successful completion.             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
            
            <div className="bg-green-500/10 border border-green-300 p-4">
              <h4 className="font-semibold text-green-700 mb-2">Tone Guidelines (Critical)</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>✓ "You're closer than you think"</li>
                <li>✓ "Here's how to bridge the gap"</li>
                <li>✓ "Many successful students started here"</li>
                <li className="text-red-700">✗ Avoid: "rejected", "failed", "ineligible"</li>
              </ul>
            </div>
          </section>

          {/* Soft Rejection */}
          <section id="soft-rejection" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 border border-red-300">EDGE CASE</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Soft Rejection Protocol</h2>
            
            <p className="text-slate-500 mb-6">
              <strong className="text-slate-900">Scenario:</strong> User's Selection Rank is below the course cutoff, AND no pathway program can bridge the gap.
            </p>
            
            <div className="bg-white border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-700" />
                Visual Components
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#006DAE]">1.</span>
                  <div>
                    <strong className="text-slate-900">Empathetic header:</strong>
                    <p className="text-sm text-slate-500">"We couldn't find a direct pathway to [Course Name] right now."</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#006DAE]">2.</span>
                  <div>
                    <strong className="text-slate-900">Reassurance text:</strong>
                    <p className="text-sm text-slate-500">"But that doesn't mean your journey ends here."</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#006DAE]">3.</span>
                  <div>
                    <strong className="text-slate-900">Alternative Options Card:</strong>
                    <ul className="text-sm text-slate-500 mt-1 space-y-1">
                      <li>• Explore similar courses with lower entry requirements</li>
                      <li>• Consider a pathway program (DoTS/DoHE/Monash College)</li>
                      <li>• Speak to an advisor</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Requirements */}
          <section id="data-requirements" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-1 text-xs font-medium bg-monash-blue/15 text-monash-blue border border-monash-blue/30">DATA & LOGIC</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Requirements</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#006DAE]" />
                  User Input Data
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">user_status</code>
                    <span className="text-slate-400">enum</span>
                  </li>
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">atar_type</code>
                    <span className="text-slate-400">predicted | actual</span>
                  </li>
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">atar_value</code>
                    <span className="text-slate-400">number (0-99.95)</span>
                  </li>
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">postcode</code>
                    <span className="text-slate-400">string (4 digits)</span>
                  </li>
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">selected_course</code>
                    <span className="text-slate-400">course_id</span>
                  </li>
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">user_email</code>
                    <span className="text-slate-400">string</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#006DAE]" />
                  Reference Data (Backend)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">courses[]</code>
                    <span className="text-slate-400">Course catalog</span>
                  </li>
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">postcodes_regional[]</code>
                    <span className="text-slate-400">+5 points</span>
                  </li>
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">postcodes_low_ses[]</code>
                    <span className="text-slate-400">+3 points</span>
                  </li>
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">articulations[]</code>
                    <span className="text-slate-400">TAFE → Course</span>
                  </li>
                  <li className="flex justify-between">
                    <code className="text-[#006DAE]">pathway_programs[]</code>
                    <span className="text-slate-400">DoTS, DoHE, MC</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-200 pt-8 mt-16">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <div>
                <p>Pathways Finder Information Architecture v2.0</p>
                <p className="text-gray-600">Monash University Digital Strategy</p>
              </div>
              <div className="text-right">
                <p>Last updated: January 2026</p>
                <p className="text-gray-600">Document maintained by Product Design</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
      
      <FooterContact 
        title={<span>Let's remove the <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold">friction</span>.</span>} 
        backLink="/"
      />
    </div>
  );
}
