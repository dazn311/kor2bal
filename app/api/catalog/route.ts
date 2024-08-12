import { prisma } from '../../../prisma/prisma';
import {NextResponse, NextRequest} from "next/server";

export async function GET(req:NextRequest) {
    const category = await prisma.category.findMany();
    return NextResponse.json(category);
}

// export async function POST(req:NextRequest) {
//     const data = await req.json();
//     const post = await prisma.items.create({data});
//     return NextResponse.json(post);
// }
