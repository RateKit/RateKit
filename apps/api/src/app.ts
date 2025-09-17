import { OpenAPIHono } from "@hono/zod-openapi";
import { APP_NAME } from "@ratekit/lib/constants";
import { Scalar } from "@scalar/hono-api-reference";
import pkg from "../package.json";

const app = new OpenAPIHono();

app.get(
	"/docs",
	Scalar({
		url: "/openapi.json",
		theme: "elysiajs",
		pageTitle: `${APP_NAME} API Documentation`,
	}),
);

app.doc("/openapi.json", {
	openapi: "3.0.0",
	info: {
		version: pkg.version,
		title: `${APP_NAME} API`,
		description: `${APP_NAME} API Documentation`,
	},
});

export default app;
