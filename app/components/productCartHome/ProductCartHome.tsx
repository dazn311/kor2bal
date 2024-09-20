import Image from "next/image";
import React from "react";
import Link from "next/link";
import './productCartHome.styles.css';

type Props = {
    item:IProduct2
};

export default  function ProductCartHome({item}:Props) {
    const imgUrl = Array.isArray(item?.images) && item.images.length > 0 ? `/images/${item.images[0].imageUrl}`:'/images/blurDataURL.jpg';

    return <div className={'catalog_item_home'} data-el={'ProductCartHome-L13'} key={String(item.id)} >
            <Link href={`/product/${item.id}`} scroll={false} >
                <Image
                    src={imgUrl}
                    fill={true}
                    alt={item.name}
                />
            </Link>
            <div className="product_description">
                <div className={'wrap_text'}>
                    <div className="text_descr">
                        <strong>
                            <h2 className={'loop-product__title'}>{item.name}</h2>
                        </strong>
                    </div>
                    <span className={'price'}>
                        <bdi className={'price-amount'}>
                            {item.price}
                        </bdi>
                        руб.
                    </span>
                </div>
            </div>
    </div>
}

// function descriptionHelper(item) {
//
//
// }
//                        <TabsContainer items={[]} />

//item: {
//   id: 9,
//   name: 'Рукав компрессионный черный 2.0',
//   category: { id: 1, name: 'Рукава' },
//   imageUrl: '/images/compression/Sleeves/SleevesBlack.jpg.webp'
// }