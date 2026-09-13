import Link from 'next/link';
import { Sparkles, Code, Bug, Rocket, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20 flex flex-col gap-16">
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center gap-6">
        <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Code Splash Summer 2026
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight max-w-3xl">
          Learn to code. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
            Create something awesome.
          </span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          A beginner-friendly 11-day coding experience exploring Scratch, Code.org logic, animations, and capstone project building.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-sky-200"
          >
            <Sparkles className="w-5 h-5" /> Start Learning Day 1
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold px-6 py-3 rounded-xl transition-all"
          >
            Explore Curriculum
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-4">
            <Code className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-800 mb-2">11-Day Journey</h3>
          <p className="text-sm text-slate-600">Step-by-step interactive lessons taking you from Scratch basics to project deployment.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
            <Bug className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-800 mb-2">Interactive Bug Lab</h3>
          <p className="text-sm text-slate-600">Practice debugging real code scenarios like runaway scores and teleporting sprites.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
            <Rocket className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-slate-800 mb-2">Capstone Project</h3>
          <p className="text-sm text-slate-600">Plan, build, and present your original game, story, or dance party project.</p>
        </div>
      </section>
    </div>
  );
}
