import Modal from "../../../modal/Modal";
import ProductViewShort from "../../../components/productViewShort/ProductViewShort";

const getProductBy = async (id: string) => {
    const prd = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
        next: { revalidate: 3 }
    });
    return  prd.json();
}

export default async function ProductViewShortModal({ params: { slug } }: { params: { slug: string } }) {
    const [prd] = await getProductBy(slug);
    return (
        <Modal>
            <ProductViewShort item={prd} />
        </Modal>
    )
}
