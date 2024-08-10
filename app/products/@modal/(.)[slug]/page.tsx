import Modal from "../../../modal/Modal";
import Product from "../../[slug]/page";

export default function Product2({ params: { slug } }: { params: { slug: string } }) {
    return (
        <Modal>
            <Product params={{slug:slug}} />
        </Modal>
    )
}
