import { Heart, Sparkles, Smile, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-10">
      <div className="text-center flex flex-col items-center gap-3">
        <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
          About Code Splash
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Building Confidence Through Code
        </h1>
        <p className="text-slate-600 text-base max-w-2xl">
          Code Splash Summer 2026 is designed to inspire young programmers by making computer science interactive, creative, and welcoming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
          <Heart className="w-6 h-6 text-rose-500" />
          <h3 className="font-bold text-slate-800">Kindness & Support</h3>
          <p className="text-sm text-slate-600">We foster an encouraging environment where every student learns at their own comfortable pace.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
          <Smile className="w-6 h-6 text-amber-500" />
          <h3 className="font-bold text-slate-800">Embracing Mistakes</h3>
          <p className="text-sm text-slate-600">Errors are just part of programming! Debugging teaches problem solving and critical thinking.</p>
        </div>
      </div>
    </div>
  );
}
