import React from "react";
import {notFound} from 'next/navigation';
import Image from "next/image";
import ProductViewShort from "../../../components/productViewShort/ProductViewShort";
import {getCatalogBy} from "../../../../lib/getCatalogBy";
import './catalog.styles.css';
// export const dynamic = 'force-static';

type Props = {
    params: { id: string }
};

export default async function CategoryOne ({ params: { id } }: Props) {
    const category:ICatalog2 | null = await getCatalogBy(id);

    if (!category) {
        return notFound();
    }

    return (
        <div className="catalog">
            <div className="container">
                <div key={category.id}>
                    <div className={'wrap_img_title'} >
                        <Image src={`/images${category.imageUrl}`} alt={category.name} width={200} height={200}/>
                    </div>
                    <div className={'catalog_list products'}>
                        {category.products && category.products.map((item) => <ProductViewShort isModal={false} url={'/product'} key={item.id} params={{id: String(item.id)}}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default CategoryOne;
// import {getCatalog} from "../../../../lib/getCatalog";
import {prisma} from "../../../../prisma/prisma";

// interface IRes {
//     id:  string;
// }

// export async function generateStaticParams2() {
//     const catalog:ICategory[] = await getCatalog();
//     const resArr:IRes[] = [];
//
//     catalog.forEach(cat => {
//         cat.products.forEach(prd => {
//             resArr.push({
//                 id: String(prd.id)
//             });
//         })
//     });
//     return resArr;
// }