import { z } from "zod";

export const SchemaObj = z.object({
	num: z.coerce
		.number<number>()
		.gte(3, { message: "Number must be at least 3" })
		.lte(30, { message: "Number must be at most 30" })
		.multipleOf(3, { message: "Give input in multiples of 3" }),
});

export type SchemaType = z.infer<typeof SchemaObj>;
