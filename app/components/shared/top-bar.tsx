'use client';

import React from 'react';
import cn from 'classnames';
import { Categories } from './Categories/categories';
import './Categories/categories.styles.css';

interface Props {
  categories: ICatalog2[];
  className?: string;
}

// as Omit<ICategory[], 'imageUrl'>
export const TopBar: React.FC<Props> = ({ categories,className }) => {
  return (
    <div className={cn('top-bar', className)} data-el={'topBar-L37'}>
      {categories && <Categories items={categories} />}
    </div>
  );
};

// const [cartVisible, setCartVisible] = React.useState(false);

// React.useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY > 300) {
//       setCartVisible(true);
//     } else {
//       setCartVisible(false);
//     }
//   };
//
//   window.addEventListener('scroll', handleScroll);
//
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);