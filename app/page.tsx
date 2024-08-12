import React from "react";
import ProductViewShort from "./components/productViewShort/ProductViewShort";
import './home.styles.css';

const getProducts = async () => {
    const prds = await fetch('http://localhost:3000/api/products', {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
        next: { revalidate: 3 }
    });
    return  prds.json();
}
const getCatalog = async () => {
    const catalog = await fetch('http://localhost:3000/api/catalog', {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
        next: { revalidate: 3 }
    });
    return  catalog.json();
}

export default async function Home() {
  const products:IProduct[] = await getProducts();
  const catalog = await getCatalog();
  console.log('29 catalog:',catalog);
  return (
    <div className="catalog">
        <div className="container">
            <div className={'catalog_list products'}>
                {products.map((item) => <ProductViewShort key={item.id} item={item}/>)}
            </div>
        </div>
    </div>
  )
}

//prds: [{
//     id: 4,
//     name: 'Компрессионные штаны 4.0 3/4',
//     imageUrl: '/images/compression/pants/4.jpg.webp',
//     categoryId: 2,
//     createdAt: '2024-08-12T15:02:39.839Z',
//     updatedAt: '2024-08-12T15:09:31.129Z'
//   },