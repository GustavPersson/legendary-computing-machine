"use server";
import { RecipeType, Recipes } from "@/schemas/recipe";

export async function getRecipes() {
  const res = await fetch("http://localhost:3000/recipes");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const parsed = Recipes.parse(data);

  return parsed;
}

export async function addRecipe(recipe: RecipeType) {
  const res = await fetch("http://localhost:3000/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to post data");
  }

  return res;
}
