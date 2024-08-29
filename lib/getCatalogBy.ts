import axios from "axios";

export const getCatalogBy = async (id:string):Promise<ICatalog2 | null>  => {

    const response2 = await axios(`${process.env.BASE_URL}/api/categoryList/${id}`, {
        method: "GET", headers: {"Content-Type": "application/json"},
        // next: { revalidate: 30}
    });

    return !!response2 && typeof response2 === 'object' ? response2.data : null;
}

// const catalog = await fetch(`http://localhost:3000/api/catalog/${id}`, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     // next: { revalidate: 30}
// });
// return  catalog.json();

// import {prisma} from "../prisma/prisma";

// return await prisma.categoryList.findFirst({
//     where:{
//         id: Number(id),
//     },
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