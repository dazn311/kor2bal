import {NextResponse} from "next/server";
import { prisma } from '../../../../prisma/prisma';

export async function GET(req:Request) {
    const id = req.url.split("/").pop();
    const category = await prisma.categoryList.findFirst({
        where:{
            id:Number(id),
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

    return NextResponse.json(category);
}

// export async function POST(req:NextRequest) {
//     const data = await req.json();
//     const post = await prisma.items.create({data});
//     return NextResponse.json(post);
// }
