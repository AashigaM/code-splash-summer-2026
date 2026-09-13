'use client';

import { use } from 'react';
import Link from 'next/link';
import { LESSONS } from '@/data/lessons';
import { useProgress } from '@/lib/useProgress';
import { CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Code2, HelpCircle } from 'lucide-react';

export default function DayPage({ params }: { params: Promise<{ day: string }> }) {
  const resolvedParams = use(params);
  const dayNumber = parseInt(resolvedParams.day, 10);
  const lesson = LESSONS.find((l) => l.day === dayNumber);
  const { progress, completeDay, isLoaded } = useProgress();

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Lesson Not Found</h1>
        <p className="text-slate-600 mt-2">The requested curriculum day does not exist.</p>
        <Link href="/learn" className="inline-block mt-4 text-sky-600 font-semibold underline">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const isComplete = isLoaded && progress.completedDays.includes(dayNumber);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col gap-8">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link href="/learn" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-sky-600">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="text-xs font-bold bg-sky-100 text-sky-700 px-3 py-1 rounded-full uppercase">
          Day {lesson.day} of 11
        </span>
      </div>

      {/* Hero Banner */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-3">
        <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">{lesson.subtitle}</span>
        <h1 className="text-3xl font-extrabold text-slate-900">{lesson.title}</h1>
        <p className="text-slate-600 text-base">{lesson.description}</p>

        {/* Skills List */}
        <div className="flex flex-wrap gap-2 mt-2">
          {lesson.skills.map((skill) => (
            <span key={skill} className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Objectives */}
      <div className="bg-sky-50/50 border border-sky-100 p-6 rounded-2xl flex flex-col gap-3">
        <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-sky-500" /> Learning Objectives
        </h3>
        <ul className="grid grid-cols-1 gap-2">
          {lesson.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities */}
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
          <Code2 className="w-5 h-5 text-indigo-500" /> Activities
        </h3>
        {lesson.activities.map((act) => (
          <div key={act.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-800">{act.title}</h4>
              <span className="text-xs font-semibold uppercase bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">
                {act.type}
              </span>
            </div>
            <p className="text-sm text-slate-600">{act.description}</p>
          </div>
        ))}
      </div>

      {/* Reflection Question */}
      <div className="bg-amber-50/60 border border-amber-100 p-6 rounded-2xl flex flex-col gap-2">
        <h3 className="font-bold text-amber-900 text-sm flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-amber-600" /> Reflection
        </h3>
        <p className="text-sm text-amber-800">{lesson.reflection}</p>
      </div>

      {/* Completion Bar */}
      <div className="flex items-center justify-between border-t border-slate-200 pt-6">
        {dayNumber > 1 ? (
          <Link href={`/learn/${dayNumber - 1}`} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-sky-600">
            <ArrowLeft className="w-4 h-4" /> Previous Day
          </Link>
        ) : <div />}

        <button
          onClick={() => completeDay(dayNumber)}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm ${
            isComplete
              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
              : 'bg-sky-500 text-white hover:bg-sky-600'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          {isComplete ? 'Completed! Mark Again' : 'Mark Day Complete'}
        </button>

        {dayNumber < 11 ? (
          <Link href={`/learn/${dayNumber + 1}`} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-sky-600">
            Next Day <ArrowRight className="w-4 h-4" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
