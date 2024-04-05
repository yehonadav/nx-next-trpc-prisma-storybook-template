// https://vercel.com/guides/nextjs-prisma-postgres
import { PrismaClient } from '../generated/client';

let prisma: PrismaClient;

export const getDB = () => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};
