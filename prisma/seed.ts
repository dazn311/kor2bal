import { Prisma, PrismaClient } from '@prisma/client';
import dataOfType from './dataOfType';
const prisma = new PrismaClient();

async function up() {
    for (const user of dataOfType.usersArr) {
        await prisma.user.create({
            data:user,
        })
    }
  // await prisma.user.createMany({
  //   data: dataOfType.usersArr
  // });

  await prisma.categoryList.create({
    data: dataOfType.kneeWraps
  });

  await prisma.categoryList.create({
    data: dataOfType.sleeves
  });

  await prisma.categoryList.create({
    data: dataOfType.uniforms
  });


}

async function down() {
    // await prisma.user.deleteMany();
  console.log('32 down:');
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
// await prisma.$executeRaw`DROP TABLE IF EXISTS User;`;
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