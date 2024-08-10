import React from 'react';
import { notFound } from 'next/navigation';
import { prisma } from '../../../prisma/prisma';

export default async function Product({ params: { slug } }: { params: { slug: string } }) {
    const product = await prisma.items.findFirst({
        where: {
            id: Number(slug),
        }});

    if (!product) {
        return notFound();
    }
    return (
        <div className="flex items-center justify-center h-screen"
             style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
            <h1 style={{fontWeight:'bold', marginBottom:4}} >{product.name}</h1>
            <div>{product.description}</div>
        </div>
    )
};