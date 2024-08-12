import Link from "next/link";
import Image from "next/image";
import React from "react";
import './productViewShort.styles.css';

export default function ProductViewShort({item}) {
    return <div className={'catalog_item'} key={String(item.id)} >
        <div className="catalog_item_container">
            <div className="wrap_img">
                <Link href={`/products/${item.id}`}>
                    <Image
                        src={item.imageUrl}
                        width={271}
                        height={374}
                        alt={item.name}
                    />
                </Link>
            </div>
            <div className="wrap_text">
                <div className="text_descr">
                    <Link href={`/products/${item.id}`}><strong>
                        <h2 className={'loop-product__title'}>{item.name}</h2>
                    </strong></Link>
                </div>
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