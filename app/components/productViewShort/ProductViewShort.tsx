import Link from "next/link";
import Image from "next/image";
// import type {ProductItem} from '@prisma/client';
import React from "react";
import {getProductBy} from "../../../lib/getProductBy";
import {notFound} from "next/navigation";
import './productViewShort.styles.css';

type Props = {
    item:IProduct2
};
// or Dynamic metadata
export async function generateMetadata({ params: { id } }: { params: { id: string } }) {
    const product = await getProductBy(id);
    if (!product) {
        return {
            title: `Not found | prd`,
        }
    }
    return {
        title: `${product.name} | prd`,
    }
}
export const dynamic = 'force-dynamic';

export default async function ProductViewShort({ params: { id } }: { params: { id: string } }) {
    const item = await getProductBy(id);
    if (!item) {
        return notFound();
    }
    const imgUrl = Array.isArray(item?.images) && item.images.length > 0 ? `/images/${item.images[0].imageUrl}`:'/images/blurDataURL.jpg';
    return <div className={'catalog_item'} data-el={'ProductViewShort'} key={String(item.id)} >
        <div className="catalog_item_container">
            <Link href={`/products/${item.id}`} scroll={false} >
                 <Image
                    src={imgUrl}
                    width={271}
                    height={312}
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.name}
                    // placeholder="blur"
                    // blurDataURL="/images/blurDataURL.jpg"
                />
            </Link>
            <div className="wrap_text">
                <div className="text_descr">
                    <strong>
                        <h2 className={'loop-product__title'}>{item.name}</h2>
                    </strong>
                </div>
                <span className={'price'}>
                        <bdi>
                            {item.price}
                        </bdi>
                    </span>
            </div>
        </div>
    </div>
}

//prd: {
//     id: 4,
//     name: 'Компрессионные штаны 4.0 3/4',
//     imageUrl: '/images/compression/pants/4.jpg.webp',
//     categoryId: 2,
//     createdAt: '2024-08-12T15:02:39.839Z',
//     updatedAt: '2024-08-12T15:09:31.129Z'
//   },
//<div className="wrap_img" style={{backgroundImage: `url("${imgUrl}")`}} />
// <Image
//     src={imgUrl}
//     width={271}
//     height={374}
//     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//     alt={item.name}
//     placeholder="blur"
//     blurDataURL="/images/blurDataURL.jpg"
//
// />

// import {getCatalog} from "../../../../../lib/getCatalog";

// export const dynamic = 'force-static';

// interface IRes {
//     id:  number;
// }

// export async function generateStaticParams() {
//     const catalog:ICategory[] = await getCatalog() as Omit<ICategory[], 'imageUrl'>;
//     const resArr:IRes[] = [];
//     catalog.forEach(cat => {
//         cat.products.forEach(prd => {
//             resArr.push({
//                 id: prd.id
//             });
//         })
//     });
//     return resArr;
// }