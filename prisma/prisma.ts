import {PrismaClient} from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient();
};

declare global {
    const prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = new PrismaClient();
// export const prisma = globalThis.prisma ?? prismaClientSingleton();

// if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
