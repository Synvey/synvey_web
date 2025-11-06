"use client";

interface FilterOption {
  id: string;
  name: string;
  count?: number;
}

interface FilterTabsProps {
  options: FilterOption[];
  selectedOption: string;
  onOptionChange: (optionId: string) => void;
  label?: string;
  className?: string;
}

export default function FilterTabs({
  options,
  selectedOption,
  onOptionChange,
  label,
  className = ""
}: FilterTabsProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          {label}
        </label>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onOptionChange(option.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedOption === option.id
                ? "bg-indigo-600 text-white"
                : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700"
            }`}
          >
            {option.name}
            {option.count !== undefined && ` (${option.count})`}
          </button>
        ))}
      </div>
    </div>
  );
}
