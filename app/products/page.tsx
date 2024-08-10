import React from 'react';
import Link from "next/link";
import { prisma } from '../../prisma/prisma';

type Props = {

};

export default async function Products(props: Props) {
    const posts = await prisma.items.findMany();
    return (
        <div className="flex items-center justify-center h-screen"
             style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8"
                 style={{padding:8, width:'max-content'}}
            >
                <h1 className="text-2xl font-bold mb-4"
                    style={{fontWeight:'bold', marginBottom:4}}
                >Welcome to the Products Page</h1>
                <p className="text-gray-700 mb-6"
                   style={{marginBottom:6}}
                >
                    This is a sample of the Products page. Some text here
                </p>
                <ul>
                    {posts.map(item => {
                        return <div key={item.id} >
                            <Link href={`/products/${item.id}`} >{item.name}</Link>
                            <div>{item.description}</div>
                        </div>
                    })}
                </ul>

            </div>
        </div>
    )
};