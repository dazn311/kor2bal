import {NextResponse} from "next/server";
// import { prisma } from '../../../prisma/prisma';
const catalogTopArr:TCatalogTop[] = [
    // {id:1, name:'Компрессионное белье'},
    {id:1, name:'Рукава',url:'/rukov'},
    {id:2, name:'Формы',url:'/forma'},
    {id:3, name:'Наколенники',url:'/nak'},
    {id:4, name:'Аксессуары',url:'#'},
    {id:6, name:'Скидки',url:'#'},
    {id:7, name:'Отзывы',url:'/otzivi'},
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
