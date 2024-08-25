import { hashSync, genSaltSync } from 'bcrypt';
const saltRounds = 10;
const salt = genSaltSync(saltRounds);

const kneeWraps = {
    name: 'Наколенники',
    imageUrl: 'kneeWraps.jpg',
    products: {
        create: [
            {
                name: 'БАСКЕТБОЛЬНЫЕ НАКОЛЕННИКИ С ДВОЙНОЙ ЗАЩИТОЙ',
                price: 3390,
                images: {
                    create: [{
                        imageUrl: 'kneeWraps-100.jpg',
                    },{
                        imageUrl: 'kneeWraps-100.jpg',
                    },
                    ],
                },
            },
            {
                name: 'БАСКЕТБОЛЬНЫЕ НАКОЛЕННИКИ С ЗАЩИТОЙ',
                price: 3190,
                images: {
                    create: [{
                        imageUrl: 'kneeWraps-101.jpg',
                    },{
                        imageUrl: 'kneeWraps-101.jpg',
                    },
                    ],
                },
            },
            {
                name: 'БАСКЕТБОЛЬНЫЕ НАКОЛЕННИКИ С ДВОЙНОЙ',
                price: 2490,
                images: {
                    create: [{
                        imageUrl: 'kneeWraps-102.jpg',
                    },{
                        imageUrl: 'kneeWraps-102.jpg',
                    },
                    ],
                },
            },
            {
                name: 'БАСКЕТБОЛЬНЫЕ НАКОЛЕННИКИ С ДВОЙНОЙ',
                price: 2690,
                images: {
                    create: [{
                        imageUrl: 'kneeWraps-103.jpg',
                    },{
                        imageUrl: 'kneeWraps-103.jpg',
                    },
                    ],
                },
            },
        ],
    },
};

export const productCartArr = [
    {id:1, name:'Компрессионное белье'},
    {id:1, name:'Рукава'},
    {id:2, name:'Формы'},
    {id:3, name:'Наколенники'},
    {id:4, name:'Аксессуары'},
    {id:5, name:'Форма для команды'},
    {id:6, name:'Скидки'},
    {id:7, name:'Отзывы'},
];