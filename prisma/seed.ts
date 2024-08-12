import { Prisma, PrismaClient } from '@prisma/client';
import { hashSync, genSaltSync } from 'bcrypt';

const prisma = new PrismaClient();

async function up() {
  const saltRounds = 10;

// Technique 1 (generate a salt and hash on separate function calls):
  const salt = genSaltSync(saltRounds);
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       fullName: 'Daz n311',
  //       email: 'daz@test.ru',
  //       password: hashSync('111111', 10),
  //       role: 'USER',
  //       verified: new Date(),
  //     },
  //     {
  //       fullName: 'Admin local',
  //       email: 'admin@test.ru',
  //       password: hashSync('111111', 10),
  //       role: 'ADMIN',
  //       verified: new Date(),
  //     },
  //   ],
  // });
  await prisma.user.create({
    data: {
      fullName: 'Daz n311',
      email: 'daz@test.ru',
      password: hashSync('111111', salt),
      role: 'USER',
      verified: new Date(),
      updatedAt: new Date()
    }
  });
  // const user = await prisma.user.create({
  //   data: {
  //     email: 'ariadne@prisma.io',
  //     name: 'Ariadne',
  //     posts: {
  //       create: [
  //         {
  //           title: 'My first day at Prisma',
  //           categories: {
  //             create: {
  //               name: 'Office',
  //             },
  //           },
  //         },
  //         {
  //           title: 'How to connect to a SQLite database',
  //           categories: {
  //             create: [{ name: 'Databases' }, { name: 'Tutorials' }],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // })
}

async function down() {
  console.log('66 down:');
  // const tables = [
  //   'User',
  //   'Product',
  //   'Ingredient',
  //   'Order',
  //   'ProductItem',
  //   'VerificationCode',
  //   'Category',
  //   'Cart',
  //   'CartItem',
  //   'Story',
  //   'StoryItem',
  // ];
  // await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS User;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "StoryItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
