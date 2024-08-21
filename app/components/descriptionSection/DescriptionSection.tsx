import {FC} from 'react';
import Image from "next/image";
import './descriptionSection.styles.css';

export const DescriptionSection:FC = () => {
    return (
        <section className="description">
            <div className="absolute_title">
                <Image
                    src={'/images/absolute_title.png.webp'}
                    width={1920}
                    height={486}
                    alt={'login'}/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="wrap_title">
                        <Image
                            src={'/images/play_descr.png.webp'}
                            width={408}
                            height={134}
                            alt={'login'}/>
                    </div>
                    <div className="wrap_text">
                        <div className="line"/>
                    </div>
                </div>
            </div>
        </section>)
}
export default DescriptionSection;