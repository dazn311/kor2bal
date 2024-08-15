import { prisma } from '../../../prisma/prisma';
import {NextResponse} from "next/server";

export async function GET() {
    const category = await prisma.categoryList.findMany({
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
