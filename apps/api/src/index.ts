import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import pkg from "../package.json";

const app = new OpenAPIHono();

app.get(
	"/docs",
	Scalar({
		url: "/openapi.json",
		theme: "elysiajs",
		pageTitle: "RateKit API Documentation",
	}),
);

app.doc("/openapi.json", {
	openapi: "3.0.0",
	info: {
		version: pkg.version,
		title: "RateKit API",
		description: "RateKit API Documentation",
	},
});

export default app;
