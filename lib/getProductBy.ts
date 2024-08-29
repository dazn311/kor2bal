import axios from "axios";

export const getProductBy = async (id: string):Promise<IProduct2 | null> => {//:Promise<IProduct2 | null>
    try {
        const url:string = `${process.env.BASE_URL}/api/productItem/${id}`;
        const res = await axios.get<IProduct3,null>(url, {
            method: "GET", headers: {"Content-Type": "application/json"}
        });

        return !!res && typeof res === 'object' ? res['data'] : null;
    } catch (e) {
        return null;
    }
}

// const prd = await fetch(`http://localhost:3000/api/products/${id}`, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json", // Set the request headers to indicate JSON format
//     },
//     // next: { revalidate: 3 }
// });
// return  prd.json();