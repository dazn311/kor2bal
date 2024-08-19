import Modal from "../../../../modal/Modal";
import Product from "../../[id]/page";
export const dynamic = 'force-static';

export default function Product2({ params: { id } }: { params: { id: string } }) {
    return (
        <Modal>
            <Product params={{id:id}} />
        </Modal>
    )
}
