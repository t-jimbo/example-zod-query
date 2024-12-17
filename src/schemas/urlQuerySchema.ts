import * as z from "zod";

const booleanStrings = ["true", "false", ""] as const;

export const urlQuerySchema = z.object({
  id: z.string(),
  content: z.string(),
  completed: z
    .enum(booleanStrings)
    .transform((val) =>
      val === "true" ? true : val === "false" ? false : null
    )
    .optional(),
  createdAt: z.string(),
});
