import Modal from "../../../../modal/Modal";
import ProductViewShort from "../../../../components/productViewShort/ProductViewShort";
import {getProductBy} from "../../../../../lib/getProductBy";

export const dynamic = 'force-static';

export default async function ProductViewShortModal({ params: { id } }: { params: { id: string } }) {
    const prd = await getProductBy(id);

    return (
        <Modal>
            <ProductViewShort item={prd} />
        </Modal>
    )
}
