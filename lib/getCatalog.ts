import { prisma } from '../prisma/prisma';

export const getCatalog = async ():Promise<ICatalog2[]> => {
    return await prisma.categoryList.findMany({
        select: {
            id: true,
            name: true,
            imageUrl: true,
            products: {
                select: {
                    id: true,
                    name: true,
                    images: true,
                    price: true,
                }
            },
        },
    });
}
// const catalog = await fetch('/api/catalog', {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json", // Set the request headers to indicate JSON format
//     },
//     // next: { revalidate: 30}
// });
// return  catalog.json();