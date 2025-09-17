import { serve } from "@hono/node-server";

import app from "./app";

serve(
	{
		fetch: app.fetch,
		port: 8448,
	},
	(info) => {
		console.log(`RateKit API is running on http://localhost:${info.port}`);
	},
);
