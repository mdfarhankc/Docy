import { z } from "zod";

const optionalString = z.string().trim().optional().or(z.literal(""));

export const documentSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type DocumentValues = z.infer<typeof documentSchema>;
