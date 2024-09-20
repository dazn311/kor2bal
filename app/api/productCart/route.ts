import {NextResponse} from "next/server";
import {productCartArr} from "@/store/localData/productCartArr";
// import { prisma } from '../../../prisma/prisma';
// import { CategoryList } from '@prisma/client';

// const category = await prisma.category.findMany();
export async function GET() {
    return NextResponse.json(productCartArr);
}

// export async function POST(req:NextRequest) {
//     const data = await req.json();
//     const post = await prisma.items.create({data});
//     return NextResponse.json(post);
// }
