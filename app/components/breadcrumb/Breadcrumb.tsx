'use client';
import './breadcrumb.styles.css';

type Props = {
    title:string
};

export  default function BreadcrumbTitle({title}:Props) {
  return (
      <div className={'breadcrumb-wrap'}>
          <nav className="wc-breadcrumb">
              {title}
          </nav>
      </div>
  )
}