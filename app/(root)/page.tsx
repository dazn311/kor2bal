import React from "react";
// import type {CategoryList} from "@prisma/client";
import ProductViewShort from "../components/productViewShort/ProductViewShort";
import BreadcrumbTitle from "../components/breadcrumb/Breadcrumb";
import {getCatalog} from "../../lib/getCatalog";
import './home.styles.css';

export const dynamic = 'force-static';

export default async function Home() {
  const catalog:ICategory[] = await getCatalog() as Omit<ICategory[], 'imageUrl'>;

  return (
    <div className="catalog">
        <div className="container">
            {
                catalog.map (({id,name,products}) => {
                    return (<div key={id}>
                        <BreadcrumbTitle title={name} />
                        <div className={'catalog_list products'}>
                            {products.map((item) => <ProductViewShort key={item.id} item={item}/>)}
                        </div>
                    </div>)
                })
            }
        </div>
    </div>
  )
}


//29 catalog: [
//   {
//     id: 1,
//     name: 'Рукава',
//     imageUrl: 'Sleeves.jpg',
//     products: [ [Object], [Object] ]
//   },
//   ]