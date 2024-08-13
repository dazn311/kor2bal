import Modal from "../../../modal/Modal";
import ProductViewShort from "../../../components/productViewShort/ProductViewShort";
import {getProductBy} from "../../../../lib/getProductBy";

export default async function ProductViewShortModal({ params: { slug } }: { params: { slug: string } }) {
    const prd = await getProductBy(slug);

    return (
        <Modal>
            <ProductViewShort item={prd} />
        </Modal>
    )
}
