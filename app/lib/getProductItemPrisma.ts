import { prisma } from "@/prisma/prisma"

// Function definition that returns a partial structure
async function getProductItem(id:string) {
    return prisma.productItem.findFirst({
        where: {id: Number(id)},
        select: {
            id: true,
            name: true,
            images: true,
            category: true,
            price: true,
        }
    });
  }

  // Extract `UsersWithPosts` type with
  // type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
  // type UsersWithPosts = ThenArg<ReturnType<typeof getProductItem>>
  
  export default getProductItem;
  // run inside `async` function
//   const usersWithPosts: UsersWithPosts = await getUsersWithPosts()