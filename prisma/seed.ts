import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const users = [
        {
            id: "testtesttest0001",
            name: "test",
            authorizer: "NotHaveAuthorizer",
            create_date: new Date(),
            mail: "test@test.com"
        },
        {
            id: "testtesttest0002",
            name: "test",
            authorizer: "testtesttest0001",
            create_date: new Date(),
            mail: "test@test.com"
        },
        {
            id: "checkouttest0001",
            name: "test",
            authorizer: "testtesttest0001",
            create_date: new Date(),
            mail: "test@test.com"
        }
    ];
    for(const user of users) {
        const result = await prisma.user.create({
            data: user,
        })
        console.log(result);
    }

}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
})