const getProducts = async () => {
    const prds = await fetch('http://localhost:3000/api/catalog', {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
    });
    return  prds.json(); // Parse the response data as JSON
}

export default async function Categories() {
    const prds = await getProducts();
  return (
      <div>
        <ul>
          {prds.map((prd:any) => <span key={String(prd.id)} >| {prd.name} |</span>)}
        </ul>
      </div>
  )
}
