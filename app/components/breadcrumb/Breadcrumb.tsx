import {FC} from 'react';
// import Link from "next/link";
import './breadcrumb.styles.css';

type Props = {
    title:string
};

export  const BreadcrumbTitle:FC = async ({title}:Props) => {
  return (
      <div className={'breadcrumb-wrap'}>
          <nav className="wc-breadcrumb">
              {title}
          </nav>
      </div>
  )
}
export default BreadcrumbTitle;