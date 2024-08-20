import Modal from "../../../../modal/Modal";
import ProductViewShort from "../../../../components/productViewShort/ProductViewShort";

export default async function ProductViewShortModal({ params }: { params: { id: string } }) {
    return (
        <Modal>
            <ProductViewShort params={params} />
        </Modal>
    )
}
