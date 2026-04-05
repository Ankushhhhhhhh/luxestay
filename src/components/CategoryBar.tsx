import * as Icons from 'lucide-react';
import { CATEGORIES } from '../types';
import { cn } from '../lib/utils';

interface CategoryBarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

export default function CategoryBar({ selectedCategory, onSelectCategory }: CategoryBarProps) {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="flex flex-row items-center justify-between overflow-x-auto no-scrollbar pt-4">
        {CATEGORIES.map((item) => {
          const Icon = (Icons as any)[item.icon];
          const isSelected = selectedCategory === item.label;

          return (
            <div
              key={item.label}
              onClick={() => onSelectCategory(item.label)}
              className={cn(
                "flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer min-w-[100px]",
                isSelected ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"
              )}
            >
              {Icon && <Icon size={24} />}
              <div className="font-medium text-xs whitespace-nowrap">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
