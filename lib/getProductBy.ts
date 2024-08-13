export const getProductBy = async (id: string) => {
    const prd = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
        next: { revalidate: 3 }
    });
    return  prd.json();
}