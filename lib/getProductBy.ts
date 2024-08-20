import {prisma} from "../prisma/prisma";
// import type {ProductItem} from '@prisma/client';

export const getProductBy = async (id: string) => {//:Promise<IProduct2 | null>
    return prisma.productItem.findFirst({
        where: { id: Number(id) },
        select: {
            id: true,
            name: true,
            images: true,
            category: true,
            price: true,
        }
    });
}

// const prd = await fetch(`http://localhost:3000/api/products/${id}`, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json", // Set the request headers to indicate JSON format
//     },
//     // next: { revalidate: 3 }
// });
// return  prd.json();