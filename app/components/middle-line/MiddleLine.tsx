import Link from "next/link";
import Image from "next/image";
import logo1x from "../../assets/icons/logo1x.png";
import getCatalogTop from "@/lib/getCatalogTop";
import './MiddleLine.styles.css';


export default async function MiddleLine() {
  const catalogArr: ICategory[] = await getCatalogTop();
  return (
      <div className={'middle_line'}>
          <div className="container">
              <div className="row">
                  <div className="navBurger"/>
                  <div className="menu-glavnoe-menyu-sleva-container">
                      <ul id={'menu-glavnoe-menyu-sleva'} className={'menu'}>
                          {catalogArr.slice(0,3).map((prd,idx) => <li key={String(prd.id) + String(idx)} >
                                                          <Link href={`/catalog/${prd.id}`}>{prd.name}</Link>
                                                      </li>)}
                      </ul>
                  </div>
                  <Link className="logo-link" href={'/'}><Image src={logo1x} alt={'kor2sket'}/></Link>
                  <div className="menu-glavnoe-menyu-sprava-container">
                      <div className="menu-glavnoe-menyu-sprava">
                          <ul id={'menu-glavnoe-menyu-sprava'} className={'menu'}>
                              {catalogArr.slice(3,14).map((prd) => <li key={String(prd.id)} >
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
