import axios from 'axios';
export const revalidate = 3600;  // revalidate every hour

export const getCatalog = async ():Promise<ICatalog2[]> => {
    const response2 = await axios(`/api/categoryList?query1=1`, {//${process.env.BASE_URL}
        method: "GET", headers: {"Content-Type": "application/json"},
        // next: { revalidate: 30}
    });

    return !!response2 && response2.status === 200 ? response2.data : null;
}

// return prisma.categoryList.findMany({
//     select: {
//         id: true,
//         name: true,
//         imageUrl: true,
//         products: {
//             select: {
//                 id: true,
//                 name: true,
//                 images: true,
//                 price: true,
//             }
//         },
//     },
// });