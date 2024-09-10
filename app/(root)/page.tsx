'use client';

import React, {useEffect} from "react";
import {Events, scrollSpy} from 'react-scroll';
import ProductViewShort from "../components/productViewShort/ProductViewShort";
import BreadcrumbTitle from "../components/breadcrumb/Breadcrumb";
import {getCatalog} from "@/lib/getCatalog";
import {TopBar} from "@/app/components/shared/top-bar";
import './home.styles.css';

export default function  Home() {
    const [catalog, setCatalog] = React.useState<ICatalog2[]>([]);
  // const catalog:ICatalog2[] = await getCatalog();// as Omit<ICategory[], 'imageUrl'>

  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
      getCatalog()
          .then(catalog => {
              setCatalog(catalog);
          });
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to: any, element: any) => {
        console.log('24 begin', ' to: ', to, ', element:', element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to: any, element: any) => {
        console.log('end', ' to: ', to, ', element:', element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    };
  }, []);

  if (!Array.isArray(catalog)) {
    return null;
  }

  return (
    <div className="catalog">
        <div className="container">
            <TopBar categories={catalog} key={'top-bar'} className={'home'} />
            {
                catalog.map (({id,name,products}) => {
                    return (<div key={id} id={name} className={'catalog_list_wrap'}>
                        <BreadcrumbTitle title={name} />
                        <div className={'catalog_list products'}>
                            {products.map((item : any) => <ProductViewShort isModal={false} url={'/products'} key={item.id} params={{id: String(item.id)}}/>)}
                        </div>
                    </div>)
                })
            }
        </div>
    </div>
  )
}
// import {notFound} from "next/navigation";
// import {IntersectionBlock} from "@/app/(root)/IntersectionBlock";

//<IntersectionBlock categoryId={id}  />