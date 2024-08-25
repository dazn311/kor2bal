import Link from "next/link";
import './tabsContainer.styles.css';
import React from "react";

type Paragraph = {
    title?:string,
    body:string,
};
type TProps = {
    items:[Paragraph]
};

export default function TabsContainer({items}:TProps) {
    return <div className="product_tabs_content">
        <div className="content_descr">
            {
                items.map(para => <ParagraphItem paragraph={para} />)
            }
        </div>
    </div>
}

function ParagraphItem({paragraph}: { paragraph:Paragraph }) {
    return <p>
        {paragraph.title && <strong>{paragraph.title}</strong>}
        {Array.isArray(paragraph.body)
            ? <ul>
                {paragraph.body.map(b => <li>{b}</li>)}
              </ul>
            : <p>{paragraph.body}</p>}
    </p>
}
