import React, {FC} from "react";
import Modal from "../../../../modal/Modal";
import Product from "../../[id]/page";

export const dynamic = 'force-static';

export const Product2:FC = ({ params: { id } }: { params: { id: string } }) => {
    return (
        <Modal>
            <Product params={{id:id}} />
        </Modal>
    )
}
export default Product2;
// import {getCatalog} from "../../../../../lib/getCatalog";
// import {getProductBy} from "../../../../../lib/getProductBy";

// interface IRes {
//     id:  string;
// }

// export async function generateStaticParams() {
//     const catalog:ICategory[] = await getCatalog() as Omit<ICategory[], 'imageUrl'>;
//     const resArr:IRes[] = [];
//     catalog.forEach(cat => {
//         cat.products.forEach(prd => {
//           resArr.push({
//               id: String(prd.id)
//           });
//         })
//     });
//     return resArr;
// }

// type Props = {
//     params: { id: string }
// };

// or Dynamic metadata
// export async function generateMetadata({ params: { id } }: Props) {
//     const product:any = await getProductBy(id);
//     return {
//         title: `${product.name} | prd`,
//     }
// }