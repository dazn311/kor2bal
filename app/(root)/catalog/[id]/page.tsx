import React from 'react';
import ProductViewShort from "../../../components/productViewShort/ProductViewShort";
import BreadcrumbTitle from "../../../components/breadcrumb/Breadcrumb";
import {getCatalogBy} from "../../../../lib/getCatalogBy";
import Image from "next/image";

type Props = {
    params: { id: string }
};

export default async function CategoryOne({ params: { id } }: Props) {
    const cat:ICategory = await getCatalogBy(id);

    return (
        <div className="catalog">
            <div className="container">
                <div key={cat.id}>
                    <BreadcrumbTitle title={cat.name} />
                    <Image src={`/images${cat.imageUrl}`} alt={cat.name} width={400} height={400}/>
                    <div className={'catalog_list products'}>
                        {cat.products && cat.products.map((item) => <ProductViewShort key={item.id} item={item}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
};
