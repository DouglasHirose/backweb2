import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function create(product){
    const result = await prisma.product.create({
        data: product
    })
    return result;
}