import React from "react";
import ProductViewShort from "../components/productViewShort/ProductViewShort";
import BreadcrumbTitle from "../components/breadcrumb/Breadcrumb";
import {getCatalog} from "../../lib/getCatalog";
import './home.styles.css';

export default async function Home() {
  const catalog:ICategory[] = await getCatalog();

  return (
    <div className="catalog">
        <div className="container">
            {
                catalog.map ((cat:ICategory) => {
                    return (<div key={cat.id}>
                        <BreadcrumbTitle title={cat.name} />
                        <div className={'catalog_list products'}>
                            {cat.products.map((item) => <ProductViewShort key={item.id} item={item}/>)}
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