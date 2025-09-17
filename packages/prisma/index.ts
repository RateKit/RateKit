import { PrismaClient } from "./client";

const globalForPrisma = global as unknown as {
	baseClient: PrismaClient;
};

const prisma = globalForPrisma.baseClient || new PrismaClient();

export default prisma;
