import { prisma } from "@/prisma/prisma"

// Function definition that returns a partial structure
async function getCategoryList() {
    return prisma.categoryList.findMany({
        select: {
            id: true,
            name: true,
            imageUrl: true,
            products: {
                select: {
                    id: true,
                    name: true,
                    images: true,
                    price: true,
                }
            },
        },
    });
  }

  // Extract `UsersWithPosts` type with
  // type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
  // type CategoryList = ThenArg<ReturnType<typeof getCategoryList>>
  
  export default getCategoryList;
  // run inside `async` function
//   const usersWithPosts: UsersWithPosts = await getUsersWithPosts()