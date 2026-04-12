'use client';

import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  error?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  name,
  id,
  error,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      {name && <input type="hidden" name={name} value={value} />}
      <button
        id={id}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full h-12 rounded-xl px-4 text-left text-sm transition-all duration-200 outline-none flex items-center justify-between ${
          error
            ? 'bg-white/[0.04] border border-red-500/50'
            : 'bg-white/[0.04] border border-white/[0.08] focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)]'
        }`}
      >
        <span className={selected ? 'text-white' : 'text-white/20'}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-white/30 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute z-50 top-full left-0 right-0 mt-2 rounded-xl border border-white/[0.08] bg-[rgb(28,27,25)] shadow-2xl shadow-black/50 overflow-hidden transition-all duration-200 origin-top ${
          open
            ? 'opacity-100 scale-y-100 translate-y-0'
            : 'opacity-0 scale-y-95 -translate-y-1 pointer-events-none'
        }`}
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onChange(option.value);
              setOpen(false);
            }}
            className={`w-full h-11 px-4 text-left text-sm transition-colors duration-150 ${
              option.value === value
                ? 'bg-white/[0.08] text-white'
                : 'text-white/60 hover:bg-white/[0.04] hover:text-white'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
