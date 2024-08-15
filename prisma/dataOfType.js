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

const sleeves = {
    name: 'Рукава',
    imageUrl: 'Sleeves.jpg',
    products: {
        create: [
            {
                name: 'РУКАВ С ЗАЩИТОЙ NEXTGEN 1.0 БЕЛЫЙ',
                price: 1490,
                images: {
                    create: [{
                        imageUrl: 'Sleeves.jpg',
                    },{
                        imageUrl: 'Sleeves2.jpg',
                    },
                    ],
                },
            },
            {
                name: 'РУКАВ С ЗАЩИТОЙ NEXTGEN 1.0',
                price: 1490,
                images: {
                    create: [{
                        imageUrl: 'SleevesBlack.jpg',
                    },{
                        imageUrl: 'SleevesBlack2.jpg',
                    },
                    ],
                },
            },
        ],
    },
};

const uniforms = {
    name: 'Формы',
    imageUrl: 'uniforms-100.jpg',
    products: {
        create: [
            {
                name: 'МАЙКА CHARGE',
                price: 890,
                images: {
                    create: [{
                        imageUrl: 'uniforms-100.jpg',
                    },{
                        imageUrl: 'uniforms-100.jpg',
                    },
                    ],
                },
            },
            {
                name: 'МАЙКА BRKLN',
                price: 890,
                images: {
                    create: [{
                        imageUrl: 'uniforms-101.jpg',
                    },{
                        imageUrl: 'uniforms-101.jpg',
                    },
                    ],
                },
            },
            {
                name: 'МАЙКА WIGGLE',
                price: 890,
                images: {
                    create: [{
                        imageUrl: 'uniforms-102.jpg',
                    },{
                        imageUrl: 'uniforms-102.jpg',
                    },
                    ],
                },
            },
            {
                name: 'МАЙКА DAGGER',
                price: 890,
                images: {
                    create: [{
                        imageUrl: 'uniforms-103.jpg',
                    },{
                        imageUrl: 'uniforms-103.jpg',
                    },
                    ],
                },
            },
            {
                name: 'МАЙКА ДВУХСТОРОННЯЯ CHALLENGE. ORANGE/GREY',
                price: 890,
                images: {
                    create: [{
                        imageUrl: 'uniforms-104.jpg',
                    },{
                        imageUrl: 'uniforms-104.jpg',
                    },
                    ],
                },
            },
        ],
    },
};

const user = [{
    fullName: 'Daz n311',
    email: 'daz@test.ru',
    password: hashSync('111111', salt),
    role: 'user',
    imageUrl: 'dazAva',
    verified: new Date(),
    updatedAt: new Date()
},
    {
        fullName: 'Admin 311',
        email: 'admin@test.ru',
        password: hashSync('111111', salt),
        role: 'root',
        imageUrl: 'adminAva',
        verified: new Date(),
        updatedAt: new Date()
    }
];

const dataOfType = {
    kneeWraps,
    sleeves,
    uniforms,
    user
}

export default dataOfType;