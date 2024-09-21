import React from "react";
import {notFound} from 'next/navigation';
import Image from "next/image";
import {getCatalogBy} from "@/lib/getCatalogBy";
import ProductCartHome from "@/app/components/productCartHome/ProductCartHome";
import './catalog.styles.css';
// export const dynamic = 'force-static';

type Props = {
    params: { id: string }
};

export default async function CategoryOne ({ params: { id } }: Props) {
    const category:ICatalog2 | null = await getCatalogBy(id);

    if (!category) {
        return notFound();
    }

    return (
        <div className="catalog">
            <div className="container">
                <div key={category.id}>
                    <div className={'wrap_img_title'} >
                        <Image src={`/images${category.imageUrl}`} alt={category.name} width={200} height={200}/>
                    </div>
                    <div className={'catalog_list products'}>
                        {category.products && category.products.map((item) => <ProductCartHome key={item.id} item={item}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

// console.log('17 category:',category)
//{
//   id: 3,
//   name: 'Наколенники',
//   imageUrl: '/catalog/nakolenniki.jpg',
//   products: [
//     {
//       id: 8,
//       name: 'БАСКЕТБОЛЬНЫЕ НАКОЛЕННИКИ С ДВОЙНОЙ ЗАЩИТОЙ',
//       images: [Array],
//       price: 3390
//     },
//     {
//       id: 9,
//       name: 'БАСКЕТБОЛЬНЫЕ НАКОЛЕННИКИ С ЗАЩИТОЙ',
//       images: [Array],
//       price: 3190
//     },
//     {
//       id: 10,
//       name: 'БАСКЕТБОЛЬНЫЕ НАКОЛЕННИКИ С ДВОЙНОЙ',
//       images: [Array],
//       price: 2490
//     },
//     {
//       id: 11,
//       name: 'БАСКЕТБОЛЬНЫЕ НАКОЛЕННИКИ С ДВОЙНОЙ',
//       images: [Array],
//       price: 2690
//     }
//   ]
// }

// export default CategoryOne;

// interface IRes {
//     id:  string;
// }

// export async function generateStaticParams2() {
//     const catalog:ICategory[] = await getCatalog();
//     const resArr:IRes[] = [];
//
//     catalog.forEach(cat => {
//         cat.products.forEach(prd => {
//             resArr.push({
//                 id: String(prd.id)
//             });
//         })
//     });
//     return resArr;
// }