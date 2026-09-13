'use client';

import Link from 'next/link';
import { LESSONS } from '@/data/lessons';
import { useProgress } from '@/lib/useProgress';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';

export default function LearnDashboard() {
  const { progress, isLoaded } = useProgress();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Curriculum Dashboard</h1>
          <p className="text-slate-600 mt-1">Master coding step-by-step across all 11 days.</p>
        </div>
        
        {/* Progress Badge */}
        <div className="bg-white border border-sky-100 p-4 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="text-right">
            <span className="text-xs font-bold text-slate-400 uppercase block">Progress</span>
            <span className="text-lg font-bold text-sky-600">
              {isLoaded ? progress.completedDays.length : 0} / 11 Days
            </span>
          </div>
          <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 font-bold">
            {isLoaded ? Math.round((progress.completedDays.length / 11) * 100) : 0}%
          </div>
        </div>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LESSONS.map((lesson) => {
          const isComplete = isLoaded && progress.completedDays.includes(lesson.day);
          return (
            <div
              key={lesson.day}
              className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                isComplete ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-100 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">
                    Day {lesson.day}
                  </span>
                  {isComplete ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
                  )}
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{lesson.title}</h3>
                <p className="text-xs font-semibold text-slate-400 mb-2">{lesson.subtitle}</p>
                <p className="text-xs text-slate-600 line-clamp-2 mb-4">{lesson.description}</p>
              </div>

              <Link
                href={`/learn/${lesson.day}`}
                className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-sky-600 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
              >
                {isComplete ? 'Review Day' : 'Start Day'} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
