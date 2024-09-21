'use client';

import React, {useState} from 'react';
import cn from 'classnames';

interface IInitialStateDesc {
    [index: string]: PropsDesc[];
}

type PropsDesc = {
    head: string,
    body: string[] | null,
}

export const TabDescription: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('0');
    const [tabsArr] = useState<string[]>(initialState);
    const [descObj] = useState<IInitialStateDesc>(propsDesc);

    // Function to handle the activation of a link.
    const handleSetActive = (to: number) => {
        setActiveTab(String(to));
    }

    return (
        <div className="tabs_container">
            <div className="product_tabs_list">
                {tabsArr.map((category, idx) => (
                    <div key={'tab' + idx} className={cn("tabs_item", {'active': idx === parseInt(activeTab)})} onClick={()=>handleSetActive(idx)}>{category}</div>))}
            </div>
            <div className="product_tabs_content">
                <div className="content_descr">
                    {
                        descObj[activeTab].map((desc, idx) => (<>
                            <p>{desc.head}</p>
                            {
                                !!desc.body && desc.body.length > 0 &&
                                <ul>
                                    {desc.body.map((bd, idx) => (<li key={bd + idx}>{bd}</li>))}
                                </ul>
                            }
                        </>))
                    }
                </div>
            </div>
        </div>
    );
};


const initialState = ['Описание', 'Размеры', 'Доставка', 'Оплата'];
const propsDesc1: PropsDesc[] = [
    {
        head: 'Компрессионные штаны ComBasket:',
        body: [
            'Эластичный и прочный материал;',
            'Идеально облегают ноги;',
            'Сохраняют тепло.',
        ]
    },
    {
        head: '100% полиэстер.',
        body: null,
    },
    {
        head: 'Незаменимая вещь в арсенале любого баскетболиста.',
        body: null,
    },
];

const propsDesc2: PropsDesc[] = [
    {
        head: 'Размер определяется исходя из Вашего роста:',
        body: [
            'S (рус. 44-46)- 167-175 см',
            'M (рус. 46-48) — 175-182 см',
            'L (рус. 48-50) — 183-190 см',
            'XL(рус. 50-52) — 190 + см',
        ]
    },
    {
        head: 'Важным параметром , при выборе размера является Вес.',
        body: null,
    },
    {
        head: 'Например, при росте 170 см Вы весите 80 кг ( выше среднего) — рекомендуется взять размер M (хотя по ростовке подходит S). Либо при росте 192 вы весите 75 кг (ниже среднего) — рекомендуется взять размер L (хотя по ростовке подходит XL).',
        body: null,
    },
];

const propsDesc3: PropsDesc[] = [
    {
        head: '1) Почта России, простой посылкой или 1 классом',
        body: [
            'Для МСК 1-2 дня, СПБ 2-4 дня, Средний срок достижения остальных регионов от 4 до 10 дней.',
        ]
    },
    {
        head: '2) Службой доставки (b2cpl.ru) до пункта вручения заказов',
        body: [
            'Средний срок доставки — МСК 1-2 дня, СПБ — 2-3 дня, Центральная Россия 2-7 дней и до 10 дней в отдаленные регионы',
        ]
    },
    {
        head: '3) Службой доставки (b2cpl.ru) курьером до двери',
        body: [
            'Средний срок доставки — МСК 1-2 дня, СПБ — 2-3 дня, Центральная Россия 2-7 дней и до 10 дней в отдаленные регионы',
        ]
    },
    {
        head: 'Склад ComBasket находится в г.Москва',
        body: null
    },
];

const propsDesc4: PropsDesc[] = [
    {
        head: '1) Оплата онлайн на сайте.',
        body: [
            '(+ Бесплатная доставка)',
            'Платежи принимаются через RoboKassa.ru — сервис, позволяющий клиентам удобно и безопасно оплачивать покупки. Оплатить заказ можно любой банковской картой, электронным кошельком и т.п.',
            'Сразу после оплаты заказа вы получаете электронный и фискальный чек на почтовый ящик',
        ]
    },
    {
        head: '2) Оплата при получении заказа',
        body: [
            '( — Платная доставка — Отсутсвие бонусов)',
            'Платежи принимаются в момент передачи заказа на почте, пункте вручения или курьером. Оплата наличными.',
        ]
    },
    {
        head: 'Оба способа оплаты обеспечивают гарантию возврата и обмена товара.',
        body: null
    }
];

const propsDesc: IInitialStateDesc = {
    '0': propsDesc1,
    '1': propsDesc2,
    '2': propsDesc3,
    '3': propsDesc4,
}
