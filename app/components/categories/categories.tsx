import Link from "next/link";
import './categories.styles.css';

const getCatalog = async () => {
    const catalog = await fetch('http://localhost:3000/api/catalog', {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
        next: { revalidate: 30}
    });
    return  catalog.json();
}

export default async function Categories() {
  const catalogArr = await getCatalog();
  return (
      <div className={'middle_line'}>
          <div className="container">
              <div className="row">
                  <div className="navBurger"/>
                  <div className="menu-glavnoe-menyu-sleva-container">
                      <ul id={'menu-glavnoe-menyu-sleva'} className={'menu'}>
                          {catalogArr.map((prd:any) => <li key={String(prd.id)} >
                                                          <Link href={'#'}>{prd.name}</Link>
                                                      </li>)}
                      </ul>
                  </div>

              </div>
          </div>
      </div>
  )
}
