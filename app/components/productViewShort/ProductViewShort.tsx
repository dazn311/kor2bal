import Link from "next/link";
import Image from "next/image";
import React from "react";
import './productViewShort.styles.css';

type Props = {
    item:IProduct
};

export default function ProductViewShort({item}:Props) {
    const imgUrl = Array.isArray(item?.images) && item.images.length > 0 ? `/images/${item.images[0].imageUrl}`:'/images/blurDataURL.jpg';
    return <div className={'catalog_item'} key={String(item.id)} >
        <div className="catalog_item_container">
            <div className="wrap_img">
                <Link href={`/products/${item.id}`} scroll={false}>
                    <Image
                        src={imgUrl}
                        width={271}
                        height={374}
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={item.name}
                        placeholder="blur"
                        blurDataURL="/images/blurDataURL.jpg"

                    />
                </Link>
            </div>
            <div className="wrap_text">
                <div className="text_descr">
                    <Link href={`/products/${item.id}`}><strong>
                        <h2 className={'loop-product__title'}>{item.name}</h2>
                    </strong></Link>
                </div>
                <Link href={'#'} className={'wc-LoopProduct-link wc-loop-product__link'}>
                    <span className={'price'}>
                        <bdi>
                            2,350
                        </bdi>
                    </span>
                </Link>
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