async function getCatalogTop() {
    const catalog = await fetch(`${process.env.BASE_URL}/api/catalogTop`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
        next: { revalidate: 30}
    });
    return  catalog.json();
}

export default getCatalogTop;