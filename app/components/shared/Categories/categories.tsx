'use client';

import React from 'react';
import {Link} from 'react-scroll';
import cn from 'classnames';
import {CategoryList} from '@prisma/client';

interface Props {
    items: CategoryList[];
    className?: string;
}

export const Categories: React.FC<Props> = ({items, className}) => {
    // Function to handle the activation of a link.
    const handleSetActive = (to: string) => {
        if (!!window && typeof window === 'object' && !!window.document && !!window.document.getElementById) {
            // @ts-ignore
            window.document.getElementById(`top_menu-${to}`).scrollIntoView({inline: "center"});
        }
    };

    return (
        <ul className={cn('categories-items', className)} >
            {items.map((category) => (
                <li key={String(category.id)} id={`top_menu-${category.name}`} className={'item_mobile_top_menu'}>
                    <Link
                        activeClass="active-item"
                        to={category.name}
                        spy={true}
                        smooth={true}
                        // exact={'true'}
                        offset={-50}
                        duration={100}
                        onSetActive={handleSetActive}
                    >
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

// import {DragManager} from "../DragManager";


// type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
// import {
//     ScrollMenu,
//     VisibilityContext,
//     getItemsPos,
//     slidingWindow,
// } from "react-horizontal-scrolling-menu";
// import "react-horizontal-scrolling-menu/dist/styles.css";

// const [left, SetLeft] = React.useState(0);
// const [selected, setSelected] = React.useState<string>("");
// const activeId = useCategoryStore((state) => state.activeId);

// const dragState = React.useRef(new DragManager());

//<BtnCatMobile key={category.id} onClick={handleItemClick(String(category.id))} category={category} activeId={activeId} className={className} setLeft={SetLeft}/>
// function onWheel(
//     {getItemById, items, scrollToItem}: scrollVisibilityApiType,
//     ev: React.WheelEvent
// ): void {
//   const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
//
//   if (isThouchpad) {
//     ev.stopPropagation();
//     return;
//   }
//
//   const allItems = items.toItems();
//   const visibleItems = items.getVisibleElements().map((el) => el[0]);
//
//   if (ev.deltaY < 0) {
//     // NOTE: for center items
//     const nextGroupItems = slidingWindow(allItems, visibleItems).next();
//     const {center} = getItemsPos(nextGroupItems);
//     scrollToItem(getItemById(center), "smooth", "center");
//   } else if (ev.deltaY > 0) {
//     const prevGroupItems = slidingWindow(allItems, visibleItems).prev();
//     const {center} = getItemsPos(prevGroupItems);
//     scrollToItem(getItemById(center), "smooth", "center");
//   }
// }



// const handleDrag =
//     ({scrollContainer}: scrollVisibilityApiType) =>
//         (ev: React.MouseEvent) =>
//             dragState.current.dragMove(ev, (posDiff: number) => {
//                 if (scrollContainer.current) {
//                     scrollContainer.current.scrollLeft += posDiff;
//                 }
//             });
//
// const handleItemClick =
//     (itemId: string) =>
//         ({getItemById, scrollToItem}: scrollVisibilityApiType) => {
//             if (dragState.current.dragging) {
//                 return false;
//             }
//             setSelected(selected !== itemId ? itemId : "");
//             // NOTE: for center items
//             scrollToItem(getItemById(itemId), "smooth", "center", "nearest");
//         };

// <div onMouseLeave={dragState.current.dragStop}>
//     <ScrollMenu
//         // LeftArrow={LeftArrow}
//         // RightArrow={RightArrow}
//         onWheel={onWheel}
//         onMouseDown={() => dragState.current.dragStart}
//         onMouseUp={({
//                         getItemById,
//                         scrollToItem,
//                         items,
//                     }: scrollVisibilityApiType) =>
//             () => {
//                 // NOTE: for center items
//                 dragState.current.dragStop();
//                 const {center} = getItemsPos(items.getVisible());
//                 scrollToItem(getItemById(center), "smooth", "center");
//             }}
//         onMouseMove={handleDrag}
//     >
//         {items.map((category) => (
//             <Link
//                 key={category.id}
//                 activeClass="active-item"
//                 to={category.name}
//                 spy={true}
//                 smooth={true}
//                 offset={50}
//                 duration={500}
//                 onSetActive={handleSetActive}
//             >
//                 {category.name}
//             </Link>
//         ))}
//     </ScrollMenu>
// </div>