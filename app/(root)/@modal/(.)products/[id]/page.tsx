import Modal from "../../../../modal/Modal";
import ProductViewShort from "../../../../components/productViewShort/ProductViewShort";
import {getProductBy} from "../../../../../lib/getProductBy";
import {notFound} from "next/navigation";

export default async function ProductViewShortModal({ params: { id } }: { params: { id: string } }) {
    const prd:IProduct2 | null = await getProductBy(id);
    if (!prd) {
        return notFound();
    }
    return (
        <Modal>
            <ProductViewShort item={prd} />
        </Modal>
    )
}
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