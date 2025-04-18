import { PrismaClient } from "@/generated/prisma/client" 

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // Opcional: muestra en consola las queries que ejecuta
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
