import {NextResponse, NextRequest} from "next/server";
// import { prisma } from '../../../prisma/prisma';
const catalogTopArr = [
    {id:0, name:'Компрессионное белье'},
    {id:1, name:'Наколенники'},
    {id:2, name:'Рукава'},
    {id:3, name:'Формы'},
    {id:4, name:'Аксессуары'},
    {id:5, name:'Форма для команды'},
    {id:6, name:'Скидки'},
    {id:7, name:'Отзывы'},
];

export async function GET(req:NextRequest) {
    // const category = await prisma.category.findMany();
    return NextResponse.json(catalogTopArr);
}

// export async function POST(req:NextRequest) {
//     const data = await req.json();
//     const post = await prisma.items.create({data});
//     return NextResponse.json(post);
// }
