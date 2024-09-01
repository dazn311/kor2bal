import {NextResponse} from "next/server";
import getCategoryList from "@/app/lib/categoryListPrisma";

// categoryList
export async function GET() {
    const res =  await getCategoryList();

    return NextResponse.json(res);
}

// export async function POST(req:NextRequest) {
//     const data = await req.json();
//     const post = await prisma.items.create({data});
//     return NextResponse.json(post);
// }
