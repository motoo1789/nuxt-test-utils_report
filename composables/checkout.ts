import { PrismaClient } from '@prisma/client'

export async function checkout(): Promise<any> {
    const prisma = new PrismaClient()

    const checkout = {
        user: 'checkouttest0001',
        approve: 2,
        key: 0,
        checkout_date: new Date(),
        return_date: new Date()
    }

    const createUser = await prisma.checkout.create({
        data: checkout
    })
    .catch((error) => {
        console.error(error);
    });

    return createUser;
}