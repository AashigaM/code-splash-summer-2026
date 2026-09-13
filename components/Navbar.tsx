'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Learn', href: '/learn' },
    { name: 'Debug Lab', href: '/debug' },
    { name: 'Build', href: '/build' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'Progress', href: '/progress' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-sky-100 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-sky-400 to-indigo-400 rounded-xl text-white shadow-sm transition-transform group-hover:scale-105">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg text-slate-800 tracking-tight">Code Splash</span>
            <span className="text-xs font-semibold text-sky-500 block -mt-1">SUMMER 2026</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-sky-200"
          >
            <Sparkles className="w-4 h-4" /> Start Learning
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-sky-100 p-4 shadow-lg flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-700 font-medium py-2 px-3 hover:bg-sky-50 rounded-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/learn"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white font-semibold py-2.5 rounded-xl mt-2"
          >
            <Sparkles className="w-4 h-4" /> Start Learning
          </Link>
        </div>
      )}
    </nav>
  );
}
