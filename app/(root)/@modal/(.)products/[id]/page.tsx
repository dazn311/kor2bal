import React from "react";
import Modal from "../../../../components/modal/Modal";
import ProductViewShort from "../../../../components/productViewShort/ProductViewShort";

export default async function ProductViewShortModal({ params }: { params: { id: string } }) {
    return (
        <Modal>
            <ProductViewShort url={'/products'} isModal={true} params={params} />
        </Modal>
    )
}
