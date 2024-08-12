import React from 'react';
import Link from "next/link";
import { prisma } from '../../prisma/prisma';

type Props = {

};

export default async function Products(props: Props) {
    const posts:IItems[] = await prisma.items.findMany();
    return (
        <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            <div style={{padding:8, width:'max-content'}}>
                <h1 style={{fontWeight:'bold', marginBottom:4}} >Products Page</h1>
                <ul>
                    {posts.map((item) => {
                        return <div key={String(item.id)} >
                            <Link href={`/products/${item.id}`} >{item.name}</Link>
                            <div>{item.description}</div>
                        </div>
                    })}
                </ul>
            </div>
        </div>
    )
};