'use client';

import { useState } from 'react';
import { Bug, Eye, CheckCircle2, AlertTriangle } from 'lucide-react';

interface BugCase {
  id: string;
  title: string;
  symptom: string;
  codeSnippet: string;
  hint: string;
  solution: string;
  explanation: string;
}

const BUGS: BugCase[] = [
  {
    id: 'teleport',
    title: 'The Teleport Bug',
    symptom: 'When you restart the game, the sprite stays in the position where it ended instead of starting back at the beginning.',
    codeSnippet: 'when green flag clicked\nforever\n  move 10 steps',
    hint: 'How does the sprite know where its home starting position is when the flag is clicked?',
    solution: 'when green flag clicked\ngo to x: 0 y: 0  <-- Reset position!\nforever\n  move 10 steps',
    explanation: 'Programs execute instructions sequentially. If you do not specify an initial `go to x:y:` block on game start, the sprite will simply stay wherever it last stopped.'
  },
  {
    id: 'runaway-score',
    title: 'Runaway Score Bug',
    symptom: 'Touching an item increases the player score by 50 points instead of just 1 point.',
    codeSnippet: 'when green flag clicked\nforever\n  if <touching Coin?> then\n    change [score] by 1',
    hint: 'Computers check code loops dozens of times per second. How long is the sprite touching the coin?',
    solution: 'when green flag clicked\nforever\n  if <touching Coin?> then\n    change [score] by 1\n    hide\n    wait 1 secs',
    explanation: 'Without a small pause, hide block, or delay, the `touching` condition evaluates true during every single frame cycle while the sprite overlaps the coin.'
  }
];

export default function DebugPage() {
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-8">
      <div>
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase mb-2">
          <Bug className="w-4 h-4" /> Bug Lab
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">Hunt the Bugs</h1>
        <p className="text-slate-600 mt-1">
          Debugging is part of being a programmer! Inspect the problem, test hints, and learn how to fix common errors.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {BUGS.map((bug) => (
          <div key={bug.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-lg">{bug.title}</h3>
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Bug Case
              </span>
            </div>

            <p className="text-sm text-slate-600"><strong className="text-slate-800">Symptom:</strong> {bug.symptom}</p>

            {/* Code Snippet Box */}
            <div className="bg-slate-900 text-sky-300 p-4 rounded-xl font-mono text-xs whitespace-pre-wrap">
              {bug.codeSnippet}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setRevealedHints((prev) => ({ ...prev, [bug.id]: !prev[bug.id] }))}
                className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <Eye className="w-3.5 h-3.5" /> {revealedHints[bug.id] ? 'Hide Hint' : 'Show Hint'}
              </button>

              <button
                onClick={() => setRevealedSolutions((prev) => ({ ...prev, [bug.id]: !prev[bug.id] }))}
                className="inline-flex items-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5" /> {revealedSolutions[bug.id] ? 'Hide Solution' : 'Show Solution'}
              </button>
            </div>

            {/* Hint Dropdown */}
            {revealedHints[bug.id] && (
              <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-xs text-amber-800">
                <strong>Hint:</strong> {bug.hint}
              </div>
            )}

            {/* Solution Dropdown */}
            {revealedSolutions[bug.id] && (
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-xs text-emerald-900 flex flex-col gap-2">
                <div>
                  <strong>Fixed Code:</strong>
                  <pre className="bg-emerald-950 text-emerald-300 p-3 rounded-lg font-mono text-xs mt-1 whitespace-pre-wrap">
                    {bug.solution}
                  </pre>
                </div>
                <p><strong>Why this works:</strong> {bug.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
