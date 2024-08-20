import {NextResponse} from "next/server";
// import { prisma } from '../../../prisma/prisma';
const catalogTopArr = [
    {id:1, name:'Компрессионное белье'},
    {id:1, name:'Рукава'},
    {id:2, name:'Формы'},
    {id:3, name:'Наколенники'},
    {id:4, name:'Аксессуары'},
    {id:5, name:'Форма для команды'},
    {id:6, name:'Скидки'},
    {id:7, name:'Отзывы'},
];

export async function GET() {
    // const category = await prisma.category.findMany();
    return NextResponse.json(catalogTopArr);
}

// export async function POST(req:NextRequest) {
//     const data = await req.json();
//     const post = await prisma.items.create({data});
//     return NextResponse.json(post);
// }
