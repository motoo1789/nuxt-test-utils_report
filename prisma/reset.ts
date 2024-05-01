import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    await prisma.$executeRaw`delete from sqlite_sequence where name='approve';`
    await prisma.$executeRaw`delete from sqlite_sequence where name='checkout';`
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
})