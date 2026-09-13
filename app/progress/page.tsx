'use client';

import { useProgress } from '@/lib/useProgress';
import { Award, CheckCircle2, Trophy, Star } from 'lucide-react';

export default function ProgressPage() {
  const { progress, isLoaded } = useProgress();

  const achievements = [
    { name: '🌱 First Steps', req: 1 },
    { name: '🎵 Sound Designer', req: 2 },
    { name: '🚀 Motion Master', req: 3 },
    { name: '✨ Animator', req: 4 },
    { name: '📖 Storyteller', req: 5 },
    { name: '🐛 Bug Hunter', req: 9 },
    { name: '🏆 Capstone Creator', req: 11 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-8">
      <div>
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full uppercase mb-2">
          <Trophy className="w-4 h-4" /> Statistics
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">Your Code Splash Journey</h1>
        <p className="text-slate-600 mt-1">Track completed curriculum days and unlocked badges.</p>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase">Days Completed</span>
            <p className="text-3xl font-black text-slate-800 mt-1">
              {isLoaded ? progress.completedDays.length : 0} / 11
            </p>
          </div>
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase">Badges Unlocked</span>
            <p className="text-3xl font-black text-slate-800 mt-1">
              {isLoaded ? achievements.filter((a) => progress.completedDays.length >= a.req).length : 0} / {achievements.length}
            </p>
          </div>
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
        <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-500" /> Achievement Badges
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {achievements.map((ach) => {
            const unlocked = isLoaded && progress.completedDays.length >= ach.req;
            return (
              <div
                key={ach.name}
                className={`p-4 rounded-xl border flex items-center justify-between ${
                  unlocked ? 'bg-emerald-50/40 border-emerald-200 text-emerald-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <span className="text-xs">{ach.name}</span>
                {unlocked && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
