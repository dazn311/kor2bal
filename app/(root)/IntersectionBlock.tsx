'use client';

import React from 'react';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';
interface Props {
    categoryId: number;
}

export const IntersectionBlock: React.FC<Props> = ({categoryId}) => {
    const setActiveId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveId(categoryId);
        }
    }, [intersection?.isIntersecting,categoryId]);

    return (<div ref={intersectionRef} />)
}
