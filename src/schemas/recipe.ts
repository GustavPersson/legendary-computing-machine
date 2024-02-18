import { z } from "zod";

const NullableFormUrl = z.preprocess(
  (v) => (v === "" ? undefined : v),
  z.string().optional()
);

export const Recipe = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.string(),
  imageUrl: NullableFormUrl,
  sourceUrl: NullableFormUrl,
});

export const Recipes = z.array(Recipe);

export type RecipeType = z.infer<typeof Recipe>;
export type RecipesType = z.infer<typeof Recipes>;
