import Image from "next/image";
import React from "react";
import Link from "next/link";
import {TabDescription} from "@/app/components/shared/TabDescription/TabDescription";
import './productCart.styles.css';

type Props = {
    item:IProduct2
};

const arr123 = [1,2,3,4,5,6,7,8,9];

export default async function ProductCart({item}:Props) {
    const imgUrl = Array.isArray(item?.images) ? `/images/${item.images[0].imageUrl}`:'/images/blurDataURL.jpg';
    return <div className={'product_cart'} key={String(item.id)} >
        <div className="row">
            <div className="product_slider">
                <div className="slider_left_container">
                    <div className={'slider_thumb slick-initialized slick-slider slick-vertical'}>
                        <div className={'slick-list draggable'}>
                            <div className="slick-track">
                                {
                                    arr123.map((idx) => (<Image
                                        key={idx}
                                        src={imgUrl}
                                        width={68}
                                        height={74}
                                        alt={item.name}
                                    />))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider_right_container">
                    <div className={'slider_previu slick-initialized slick-slider'}>
                        <div className={'slick-list draggable'}>
                            <div className="slick-track">
                                <div className={'slider_previu_item slick-slide slick-current slick-active'}>
                                    <Image
                                        src={imgUrl}
                                        width={492}
                                        height={460}
                                        alt={item.name}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_description">
                <div className="wrap_text">
                    <strong>
                         {/*{item?.category ? item.category : 'category26'}*/}
                         {/*{item?.category?.name ? item.category.name : 'category26'}*/}
                        <span>
                            <h1 className={'loop-product__title'}>{item.name}</h1>
                        </span>
                    </strong>
                    <p>
                        <span className={'wc-price-amount amount'}>
                            <bdi>{item.price}<span>руб.</span></bdi>
                        </span>
                    </p>
                    <div className="single_variation_wrap">
                        <a href="https://www.wildberries.ru/catalog/19254375/detail.aspx?targetUrl=GP" target="_blank"
                           className="single_add_to_cart_button button alt">Купить на WBerries</a>
                    </div>
                    <a role="button" tabIndex={0} data-name="dobavit-v-spisok-zhelanij"
                       aria-label="Добавить в список желаний"
                       className="tinvwl_add_to_wishlist_button tinvwl-position-after" data-tinv-wl-list="[]"
                       data-tinv-wl-product="29994" data-tinv-wl-productvariation="29997"
                       data-tinv-wl-productvariations="[]" data-tinv-wl-producttype="variable"
                       data-tinv-wl-action="addto">
                        <span className="tinvwl_add_to_wishlist-text">Добавить в список желаний</span>
                    </a>
                    <div className="product_meta">
                        <span className={'sku_wrapper'}>
                            Артикул: <span className="sku">SkeG77/2</span>
                        </span>
                        <span className="posted_in">Категории:
                            <Link href="/catalog" rel="tag">Компрессионное белье</Link>,
                            <Link href="/catalog/1" rel="tag">Штаны</Link>
                        </span>
                    </div>

                </div>
            </div>
        </div>
        <div className="product_tabs">
            <div className="container">
                <div className="row">
                    <TabDescription/>
                    <div className="previu_img">
                        <Image
                            key={'idx-100'}
                            src={imgUrl}
                            width={492}
                            height={460}
                            alt={item.name}
                        />
                    </div>
                </div>
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