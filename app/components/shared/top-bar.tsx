'use client';

import React from 'react';
import cn from 'classnames';
import { Container } from './container';
import { Categories } from './categories';
// import { SortPopup } from './sort-popup';
import { CategoryList } from '@prisma/client';
// import { CartButton } from './cart-button';
import './categories.styles.css';

interface Props {
  categories: CategoryList[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  const [cartVisible, setCartVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setCartVisible(true);
      } else {
        setCartVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={cn('top-bar', className)} data-el={'topBar-L37'}>
      <Container className="container">
        <Categories items={categories} />
        <div className="flex items-center">
          {/*<SortPopup />*/}
        </div>
      </Container>
    </div>
  );
};
