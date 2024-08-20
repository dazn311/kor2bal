import React from 'react';
import { notFound } from 'next/navigation';
import {getProductBy} from "../../../../lib/getProductBy";
import ProductCart from "../../../components/productCart/ProductCart";
import type {Metadata} from "next";

export const dynamic = 'force-static';

// or Dynamic metadata
export async function generateMetadata({ params: { id } }: { params: { id: string } }):Promise<Metadata> {
    const product:IProduct2 | null = await getProductBy(id);
    if (!product) {
        return {
            title: `Not found | prd`,
        }
    }
    return {
        title: `${product.name} | prd`,
    }
}

export default async function Product({ params: { id } }: { params: { id: string } }) {
    const product:IProduct2 | null = await getProductBy(id);
    // console.log('[41 Product] product:',JSON.stringify(product,null,2));
    if (!product) {
        return notFound();
    }
    return (<ProductCart item={product}/>)
};


// interface IRes {
//     id:  string;
// }

// export async function generateStaticParams() {
//     const catalog:ICategory[] = await getCatalog();
//     const resArr:IRes[] = [];
//     catalog.forEach(cat => {
//         cat.products.forEach(prd => {
//             resArr.push({
//                 id: String(prd.id)
//             });
//         })
//     });
//     return resArr;
// }