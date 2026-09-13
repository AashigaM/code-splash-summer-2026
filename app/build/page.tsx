'use client';

import { useState } from 'react';
import { Rocket, CheckSquare, Presentation, Sparkles, Save } from 'lucide-react';

export default function BuildPage() {
  const [projectType, setProjectType] = useState<'Game' | 'Story' | 'Dance Party'>('Game');
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [coolFeature, setCoolFeature] = useState('');
  const [bugStory, setBugStory] = useState('');

  const [checklist, setChecklist] = useState({
    sprites: false,
    backdrops: false,
    eventBlock: false,
    loop: false,
    conditionalOrVariable: false,
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-10">
      <div>
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 text-xs font-bold px-3 py-1 rounded-full uppercase mb-2">
          <Rocket className="w-4 h-4" /> Capstone Planner
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">Project & Pitch Builder</h1>
        <p className="text-slate-600 mt-1">
          Plan your original project mechanics, verify your code requirements, and create your 1-minute pitch.
        </p>
      </div>

      {/* Step 1: Direction Selection */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
        <h3 className="font-bold text-slate-800 text-base">Step 1: Choose Your Project Path</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(['Game', 'Story', 'Dance Party'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setProjectType(type)}
              className={`p-4 rounded-xl border font-bold text-sm text-center transition-all ${
                projectType === type
                  ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 text-slate-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Requirements Checklist */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
        <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-sky-500" /> Step 2: Curriculum Requirements Checklist
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {[
            { key: 'sprites', label: 'At least 2 sprites' },
            { key: 'backdrops', label: 'At least 2 backdrops' },
            { key: 'eventBlock', label: 'At least 1 Event block trigger' },
            { key: 'loop', label: 'At least 1 Repeat or Forever loop' },
            { key: 'conditionalOrVariable', label: 'At least 1 Conditional (If/Else) or Variable' },
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={checklist[key as keyof typeof checklist]}
                onChange={() => toggleCheck(key as keyof typeof checklist)}
                className="w-4 h-4 rounded text-sky-500 focus:ring-sky-400"
              />
              <span className={checklist[key as keyof typeof checklist] ? 'line-through text-slate-400' : ''}>
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Step 3: Pitch Generator Inputs */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
        <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
          <Presentation className="w-5 h-5 text-indigo-500" /> Step 3: Pitch Generator Notes
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Project Name</label>
            <input
              type="text"
              placeholder="e.g. Space Dodge 2026"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-sky-400"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">What does your project do?</label>
            <textarea
              placeholder="e.g. You control a spaceship using arrow keys and dodge falling asteroids while collecting stars."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-sky-400 h-20"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">What was your favorite feature or code block to write?</label>
            <input
              type="text"
              placeholder="e.g. The broadcast block that triggers the game over screen when lives reach 0."
              value={coolFeature}
              onChange={(e) => setCoolFeature(e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-sky-400"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">What bug did you run into and how did you fix it?</label>
            <input
              type="text"
              placeholder="e.g. My sprite wouldn't reset its position, so I added a 'go to x:y' block at the start."
              value={bugStory}
              onChange={(e) => setBugStory(e.target.value)}
              className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-sky-400"
            />
          </div>
        </div>
      </div>

      {/* Generated Pitch Preview */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 rounded-2xl flex flex-col gap-4">
        <h3 className="font-bold text-sky-300 text-sm flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Your 1-Minute Presentation Outline
        </h3>
        <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono bg-slate-800/60 p-4 rounded-xl">
          <p>Hi everyone! My project is called <strong>{projectName || '[Project Name]'}</strong>, which is a <strong>{projectType}</strong>.</p>
          <br />
          <p>In my project, {description || '[briefly describe what happens]'}.</p>
          <br />
          <p>My favorite code block to build was {coolFeature || '[favorite code feature]'}.</p>
          <br />
          <p>One bug I encountered was {bugStory || '[bug story]'}, and I fixed it during testing. Thanks for listening!</p>
        </div>
      </div>
    </div>
  );
}
