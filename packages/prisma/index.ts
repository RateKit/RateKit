import { LOGGER_LEVEL } from "../lib/constants";
import { type Prisma, PrismaClient } from "./client";

const prismaOptions: Prisma.PrismaClientOptions = {};

const globalForPrisma = global as unknown as {
	baseClient: PrismaClient;
};

switch (LOGGER_LEVEL) {
	case 1:
		prismaOptions.log = ["error"];
		break;
	case 2:
		prismaOptions.log = ["warn", "error"];
		break;
	case 3:
		prismaOptions.log = ["info", "warn", "error"];
		break;
	case 4:
		prismaOptions.log = ["query", "info", "warn", "error"];
		break;
	default:
		break;
}

const prisma = globalForPrisma.baseClient || new PrismaClient(prismaOptions);

export default prisma;
