export const getCatalog = async () => {
    const catalog = await fetch('http://localhost:3000/api/catalog', {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
        next: { revalidate: 30}
    });
    return  catalog.json();
}