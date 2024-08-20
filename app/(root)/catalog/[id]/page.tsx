import React from 'react';
import {notFound} from 'next/navigation';
// import type {CategoryList} from '@prisma/client';
import Image from "next/image";
import ProductViewShort from "../../../components/productViewShort/ProductViewShort";
import BreadcrumbTitle from "../../../components/breadcrumb/Breadcrumb";
import {getCatalogBy} from "../../../../lib/getCatalogBy";

export const dynamic = 'force-static';

type Props = {
    params: { id: string }
};

export default async function CategoryOne({ params: { id } }: Props) {
    const category:ICatalog2 | null = await getCatalogBy(id);

    if (!category) {
        return notFound();
    }

    return (
        <div className="catalog">
            <div className="container">
                <div key={category.id}>
                    <BreadcrumbTitle title={category.name} />
                    <Image src={`/images${category.imageUrl}`} alt={category.name} width={400} height={400}/>
                    <div className={'catalog_list products'}>
                        {category.products && category.products.map((item) => <ProductViewShort key={item.id} params={{id: String(item.id)}}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
};
// import {getCatalog} from "../../../../lib/getCatalog";
import {prisma} from "../../../../prisma/prisma";

// interface IRes {
//     id:  string;
// }

// export async function generateStaticParams() {
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