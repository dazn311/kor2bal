'use client';

import React,{useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {getProductBy} from "@/lib/getProductBy";
import './productViewShort.styles.css';

export default function ProductViewShort ({ params: { id },url,isModal }: { params: { id: string },url:string,isModal:boolean }) {
    const [item, setItem] = useState<IProduct2 | null>(null);

    useEffect(() => {
        getProductBy(id)
            .then(prd => {
                setItem(prd);
            })
    },[id]);

    if (!item) {
        return null;
    }

    const classNameModal = isModal ? 'catalog_item_container modal':'catalog_item_container';
    const classNameWrapText = isModal ? 'wrap_text_modal':'wrap_text';
    const imgUrl = Array.isArray(item?.images) && item.images.length > 0 ? `/images/${item.images[0].imageUrl}`:'/images/blurDataURL.jpg';

    return <div className={'catalog_item'} data-el={'ProductViewShort32'} key={String(item.id)} >
        <div className={classNameModal}>
            <Link href={`${url}/${item.id}`} scroll={false} >
                 <Image
                    src={imgUrl}
                    fill={true}
                    // width={271}
                    // height={312}
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.name}
                    // placeholder="blur"
                    // blurDataURL="/images/blurDataURL.jpg"
                />
            </Link>
            <div className="product_description">
                <div className={classNameWrapText}>
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
                    {isModal && <>
                        <div className="single_variation_wrap">
                            <a href="https://www.wildberries.ru/catalog/19254375/detail.aspx?targetUrl=GP"
                               target="_blank"
                               className="single_add_to_carclassNameNameton button alt">Купить на WBerries</a>
                        </div>
                        <a role="button" tabIndex={0} data-name="tabIndexv-spisok-zhelanij"
                           aria-label="Добавить в список желаний"
                           className="tinvwl_add_to_wisclassNameName_button tinvwl-position-after" data-tinv-wl-list="[]"
                           data-tinv-wl-product="29994" data-tinv-wl-productvariation="29997"
                           data-tinv-wl-productvariations="[]" data-tinv-wl-producttype="variable"
                           data-tinv-wl-action="addto"><span className="tinvwl_add_to_wisclassNameName-text">Добавить в список желаний</span></a>
                        <div className="product_meta">
                        <span className="sku_wrapper">
                            Артикул:
                            <span className="sku">SkeG77/2</span>
                        </span>
                            <span className="posted_in">
                            Категории::
                            <Link href={'/catalog'}>Компрессионное белье</Link>
                        </span>
                        </div>
                    </>}
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

// export async function generateStaticParams2() {
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

// type Props = {
//     item:IProduct2
// };
// or Dynamic metadata
// export async function generateMetadata({ params: { id } }: { params: { id: string } }) {
//     const product = await getProductBy(id);
//     if (!product) {
//         return {
//             title: `Not found | prd`,
//         }
//     }
//     return {
//         title: `${product.name} | prd`,
//     }
// }
// export const dynamic = 'force-dynamic';