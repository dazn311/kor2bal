import {prisma} from "../prisma/prisma";

export const getCatalogBy = async (id:string):Promise<ICatalog2 | null>  => {

    return await prisma.categoryList.findFirst({
        where:{
            id: Number(id),
        },
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
// const catalog = await fetch(`http://localhost:3000/api/catalog/${id}`, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     // next: { revalidate: 30}
// });
// return  catalog.json();