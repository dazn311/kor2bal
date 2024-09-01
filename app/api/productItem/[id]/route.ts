import {NextRequest, NextResponse} from "next/server";
// import { Prisma } from "@prisma/client";
import getProductItem from "@/app/lib/getProductItemPrisma";

// type UsersWithPosts = Prisma.PrismaPromise<typeof getProductItem>
// productItem
export async function GET(req:NextRequest) {
    const [id] = req.url.split('/').slice(-1);
    if (!id) {
        return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }
    const res =  await getProductItem(id);

    return NextResponse.json(res);
}

// export async function POST(req:NextRequest) {
//     const data = await req.json();
//     const post = await prisma.items.create({data});
//     return NextResponse.json(post);
// }

// GET /api/productItem/7 200 in 40ms
// 16 productItem GET: {
//     id: 10,
//         name: 'БАСКЕТБОЛЬНЫЕ НАКОЛЕННИКИ С ДВОЙНОЙ',
//         images: [
//         { id: 19, imageUrl: 'kneeWraps-102.jpg', product_id: 10 },
//         { id: 20, imageUrl: 'kneeWraps-102.jpg', product_id: 10 }
//     ],
//         category: { id: 3, name: 'Наколенники', imageUrl: '/catalog/nakolenniki.jpg' },
//     price: 2490
// }
