'use client';

import React from 'react';//{ReactNode}
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import cn from 'classnames';
import {CategoryList} from "@prisma/client";

interface Props {
  category: CategoryList;
  className?: string;
  activeId: number;
  onClick: Function;
  setLeft: Function;
}

// as Omit<ICategory[], 'imageUrl'>
export const BtnCatMobile: React.FC<Props> = (
    {
      category,
      className,
      activeId,
      onClick,
      setLeft }) => {
  const [cartVisible, setCartVisible] = React.useState(false);
  const intersectionRef = React.useRef<HTMLAnchorElement>(null);
  const visibility = React.useContext(VisibilityContext);
  const isVisible = visibility.useIsVisible(String(activeId), true);
  React.useEffect(() => {
    const handleScroll = () => {
      // if (window.scrollY > 300) {
      //   setCartVisible(true);
      // } else {
      //   setCartVisible(false);
      // }
    };
    const innerWidth = window.innerWidth|| document.documentElement.clientWidth||
        document.body.clientWidth;

    if (intersectionRef.current) {

      if (activeId === category.id) {
        const left = intersectionRef.current.getBoundingClientRect().left;
        console.log(' 34 left: ',  left);
        const w = innerWidth /2;
        setLeft(-left +w);
      }

      // const height = innerHeight;
      console.log(' refer.minHeight: ',  intersectionRef.current.style.minHeight)

      console.log(' innerWidth: ',  innerWidth);
      console.log('23 intersectionRef:',intersectionRef.current)

    }
    // window.addEventListener('scroll', handleScroll);

    return () => {
      // window.removeEventListener('scroll', handleScroll);
    };
  }, [activeId]);

  return (
      <div
          onClick={() => onClick(visibility)} // NOTE: for center items
          role="button"
          // ref={intersectionRef}
          key={category.id}
          data-el={'BtnCatMobile-L37'}
          className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5',
              activeId === category.id && 'active-item',
          )}
          // href={`/#${category.name}`}
      >
        {category.name}
      </div>
  );
};
