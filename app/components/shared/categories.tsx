'use client';

import React from 'react';
import cn from 'classnames';
import { useCategoryStore } from '@/store/category';
import { CategoryList } from '@prisma/client';

interface Props {
  items: CategoryList[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const activeId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('categories-items', className)}>
      {items.map((category) => (
        <a
          key={category.id}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeId === category.id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${category.name}`}>
          {category.name}
        </a>
      ))}
    </div>
  );
};
