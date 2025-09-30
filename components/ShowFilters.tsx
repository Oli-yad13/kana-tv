"use client";

import { useMemo } from "react";

export interface ShowFiltersState {
  category: string;
  dubbedOnly: boolean;
}

export default function ShowFilters({
  categories,
  value,
  onChange,
}: {
  categories: string[];
  value: ShowFiltersState;
  onChange: (next: ShowFiltersState) => void;
}) {
  const pills = useMemo(() => ["All", ...categories], [categories]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {pills.map((c) => {
        const active =
          value.category === c || (c === "All" && value.category === "All");
        return (
          <button
            key={c}
            onClick={() => onChange({ ...value, category: c })}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              active
                ? "bg-pink-700 text-white"
                : "bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            {c}
          </button>
        );
      })}
      <div className="ml-auto flex items-center gap-2">
        <label className="text-sm text-white/80">Dubbed</label>
        <button
          onClick={() => onChange({ ...value, dubbedOnly: !value.dubbedOnly })}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            value.dubbedOnly ? "bg-pink-700" : "bg-white/20"
          }`}
          aria-pressed={value.dubbedOnly}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
              value.dubbedOnly ? "translate-x-5" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
