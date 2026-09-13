'use client';

import { useState } from 'react';
import { Sparkles, Gamepad2, BookOpen, Music, ExternalLink } from 'lucide-react';

interface ShowcaseProject {
  id: string;
  title: string;
  student: string;
  category: 'Game' | 'Story' | 'Dance Party';
  description: string;
  feature: string;
  link: string;
}

const SAMPLE_PROJECTS: ShowcaseProject[] = [
  {
    id: '1',
    title: 'Aqua Quest',
    student: 'Alex M.',
    category: 'Game',
    description: 'Guide the scuba diver sprite through underwater coral to collect gems while dodging obstacles.',
    feature: 'Uses broadcasts to signal game state transitions when all gems are collected.',
    link: 'https://scratch.mit.edu',
  },
  {
    id: '2',
    title: 'Cosmic Journey',
    student: 'Sam T.',
    category: 'Story',
    description: 'An interactive two-scene animated story about an astronaut exploring an alien planet.',
    feature: 'Timed dialogue scripts with custom costumes and backdrop switching.',
    link: 'https://scratch.mit.edu',
  },
  {
    id: '3',
    title: 'Neon Beat Studio',
    student: 'Jordan P.',
    category: 'Dance Party',
    description: 'An interactive musical dance floor where key presses trigger sprite dance moves and sound loops.',
    feature: 'Code.org Dance Party API with keyboard event listeners.',
    link: 'https://code.org',
  },
];

export default function ShowcasePage() {
  const [filter, setFilter] = useState<'All' | 'Game' | 'Story' | 'Dance Party'>('All');

  const filtered = filter === 'All' ? SAMPLE_PROJECTS : SAMPLE_PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8">
      <div>
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase mb-2">
          <Sparkles className="w-4 h-4" /> Gallery
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">Student Showcase</h1>
        <p className="text-slate-600 mt-1">Explore capstone projects created during Code Splash Summer 2026.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {(['All', 'Game', 'Story', 'Dance Party'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === cat
                ? 'bg-sky-500 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-md">
                  {project.category}
                </span>
                <span className="text-xs font-medium text-slate-400">By {project.student}</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg">{project.title}</h3>
              <p className="text-xs text-slate-600 mt-2">{project.description}</p>
              
              <div className="bg-slate-50 p-3 rounded-xl mt-3 text-xs text-slate-600">
                <strong className="text-slate-800">Favorite Feature:</strong> {project.feature}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 rounded-xl transition-colors"
            >
              View Project <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
