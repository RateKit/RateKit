import prisma from "@ratekit/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { APP_NAME } from "./constants";

const auth = betterAuth({
	appName: APP_NAME,
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	emailAndPassword: {
		enabled: true,
		revokeSessionsOnPasswordReset: true,
	},
});

export default auth;
