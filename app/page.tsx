import Link from "next/link";

const getProducts = async () => {
    const prds = await fetch('http://localhost:3000/api/products', {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
    });
    return  prds.json(); // Parse the response data as JSON
}

export default async function Home() {
    const prds = await getProducts();
  return (
      <div>Main page
        <div>
          <Link href="/products">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                products
            </button>
          </Link>
                {JSON.stringify(prds,null,2)}
        </div>
      </div>
  )
}
