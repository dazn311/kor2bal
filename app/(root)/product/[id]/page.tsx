import {notFound} from "next/navigation";
import ProductCart from "../../../components/productCart/ProductCart";
import {getProductBy} from "../../../../lib/getProductBy";

type Props = {
    params: { id: string }
};

export default async function ProductViewCart({ params: { id } }: Props) {
    const product = await getProductBy(id);
    // console.log('[41 Product] product:',JSON.stringify(product,null,2));
    if (!product) {
        return notFound();
    }
    return (
       <ProductCart item={product} />
    )
}
