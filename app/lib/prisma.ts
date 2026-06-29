import { PrismaClient } from "@/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })


const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

//globalインスタンスで作成することで、一回だけ生成される
//ホットリロードされるたびにPrismaインスタンスが作成されるのを防ぐ
//シングルトン

if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({ adapter })
}

const prisma = globalForPrisma.prisma

export default prisma