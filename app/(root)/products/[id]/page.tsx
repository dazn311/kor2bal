import React from 'react';
import { notFound } from 'next/navigation';
import {getProductBy} from "../../../../lib/getProductBy";
import ProductCart from "../../../components/productCart/ProductCart";

export const dynamic = 'force-static';

export default async function Product({ params: { id } }: { params: { id: string } }) {
    const product = await getProductBy(id);

    if (!product) {
        return notFound();
    }
    return (<ProductCart item={product}/>)
};

//[8 Product page] product: {
//   id: 9,
//   name: 'Рукав компрессионный черный 2.0',
//   category: { id: 1, name: 'Рукава' },
//   imageUrl: '/images/compression/Sleeves/SleevesBlack.jpg.webp'
// }