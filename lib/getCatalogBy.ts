export const getCatalogBy = async (id:string):Promise<ICategory> => {
    const catalog = await fetch(`http://localhost:3000/api/catalog/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        next: { revalidate: 30}
    });
    return  catalog.json();
}