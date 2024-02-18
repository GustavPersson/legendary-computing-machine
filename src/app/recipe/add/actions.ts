"use server";
import { Recipe } from "@/schemas/recipe";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createRecipe(prevState: any, formData: FormData) {
  const recipe = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    ingredients: (formData.getAll("ingredients") as Array<string>).filter(
      (i) => i.length > 0
    ),
    instructions: formData.get("instructions") as string,
    imageUrl: formData.get("imageUrl") as string | undefined,
    sourceUrl: formData.get("sourceUrl") as string | undefined,
  };

  let result = null;

  try {
    const optionalId = Recipe.partial({
      id: true,
    });

    const parsed = optionalId.parse(recipe);

    result = await fetch(`http://localhost:3000/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed),
    });

    if (!result.ok) {
      return {
        message:
          "Something went wrong when saving your recipe. Please try again.",
      };
    }
  } catch (error) {
    return {
      message: `Something went wrong when saving your recipe. Please try again.`,
    };
  }

  result = await result.json();

  revalidatePath("/recipes");
  redirect(`/recipe/${result.id}`);
}
