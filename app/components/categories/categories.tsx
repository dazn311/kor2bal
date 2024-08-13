import Link from "next/link";
import {getCatalog} from "../../../lib/getCatalog";
import './categories.styles.css';

export default async function Categories() {
  const catalogArr:ICategory[] = await getCatalog();

  return (
      <div className={'middle_line'}>
          <div className="container">
              <div className="row">
                  <div className="navBurger"/>
                  <div className="menu-glavnoe-menyu-sleva-container">
                      <ul id={'menu-glavnoe-menyu-sleva'} className={'menu'}>
                          {catalogArr.map((prd) => <li key={String(prd.id)} >
                                                          <Link href={'#'}>{prd.name}</Link>
                                                      </li>)}
                      </ul>
                  </div>

              </div>
          </div>
      </div>
  )
}
