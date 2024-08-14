import { prisma } from '../../../prisma/prisma';
import {NextResponse} from "next/server";

export async function GET(req:Request) {
    const category = await prisma.category.findMany({
        select: {
            id: true,
            name: true,
            products: true,
        },
    });
    return NextResponse.json(category);
}

// export async function POST(req:NextRequest) {
//     const data = await req.json();
//     const post = await prisma.items.create({data});
//     return NextResponse.json(post);
// }
