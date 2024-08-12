import Link from "next/link";
import './MiddleLine.styles.css';
import Image from "next/image";
import logo1x from "../../assets/icons/logo1x.png";

const getCatalog = async () => {
    const catalog = await fetch('http://localhost:3000/api/catalogTop', {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Set the request headers to indicate JSON format
        },
        next: { revalidate: 30}
    });
    return  catalog.json();
}

export default async function MiddleLine() {
  const catalogArr = await getCatalog();
  return (
      <div className={'middle_line'}>
          <div className="container">
              <div className="row">
                  <div className="navBurger"/>
                  <div className="menu-glavnoe-menyu-sleva-container">
                      <ul id={'menu-glavnoe-menyu-sleva'} className={'menu'}>
                          {catalogArr.slice(0,4).map((prd:any) => <li key={String(prd.id)} >
                                                          <Link href={'#'}>{prd.name}</Link>
                                                      </li>)}
                      </ul>
                  </div>

                  <div className="logo-link">
                      <Image src={logo1x} alt={'kor2sket'}/>
                  </div>
                  <div className="menu-glavnoe-menyu-sprava-container">
                      <div className="menu-glavnoe-menyu-sprava">
                          <ul id={'menu-glavnoe-menyu-sprava'} className={'menu'}>
                              {catalogArr.slice(4,14).map((prd:any) => <li key={String(prd.id)} >
                                  <Link href={'#'}>{prd.name}</Link>
                              </li>)}
                          </ul>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  )
}
