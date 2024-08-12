import React from 'react';
import { prisma } from '../../prisma/prisma';
// import ProductViewShort from "../components/productViewShort/ProductViewShort";

type Props = {

};

export default async function Products(props: Props) {
    const posts:IItems[] = await prisma.items.findMany();
    return (
        <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            <div style={{padding:8, width:'max-content'}}>
                <ul>

                </ul>
            </div>
        </div>
    )
};
// {posts.map((item) => <ProductViewShort key={item.id} item={item}/>)}