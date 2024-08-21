import React, {FC} from "react";
import ProductViewShort from "../components/productViewShort/ProductViewShort";
import BreadcrumbTitle from "../components/breadcrumb/Breadcrumb";
import {getCatalog} from "../../lib/getCatalog";
import {notFound} from "next/navigation";
import './home.styles.css';

// export const dynamic = 'force-static';
// export const dynamic = 'force-dynamic';

export const Home:FC = async () => {
  const catalog = await getCatalog() as Omit<ICategory[], 'imageUrl'>;
  if (!Array.isArray(catalog)) {
    return notFound();
  }
    // console.log('[25 Home] catalog:',JSON.stringify(catalog,null,2));
  return (
    <div className="catalog">
        <div className="container">
            {
                catalog.map (({id,name,products}) => {
                    return (<div key={id}>
                        <BreadcrumbTitle title={name} />
                        <div className={'catalog_list products'}>
                            {products.map((item : any) => <ProductViewShort key={item.id} params={{id: String(item.id)}}/>)}
                        </div>
                    </div>)
                })
            }
        </div>
    </div>
  )
}
export default Home;

// export async function generateStaticParams() {
//     const catalog:ICategory[] = await getCatalog() as Omit<ICategory[], 'imageUrl'>;
//     return catalog.map(cat => {
//         return {
//             id: cat.id
//         }
//     })
// }