"use server";
import { Recipe, RecipeType } from "@/schemas/recipe";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function getRecipe(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/recipes/${id}`, {
      next: { tags: [id] },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    const parsed = Recipe.parse(data);

    return parsed;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function editRecipe(prevState: any, formData: FormData) {
  const recipe = {
    id: formData.get("id") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    ingredients: (formData.getAll("ingredients") as Array<string>).filter(
      (i) => i.length > 0
    ),
    instructions: formData.get("instructions") as string,
    imageUrl: formData.get("imageUrl") as string | undefined,
    sourceUrl: formData.get("sourceUrl") as string | undefined,
  };

  try {
    const parsed = Recipe.parse(recipe);

    const res = await fetch(`http://localhost:3000/recipes/${parsed.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed),
    });

    if (!res.ok) {
      return {
        message:
          "Something went wrong when saving your edits. Please try again.",
      };
    }
  } catch (error) {
    return {
      message: `Something went wrong when saving your edits. Please try again.`,
    };
  }

  revalidateTag(recipe.id);
  revalidatePath("/recipes");
  redirect(`/recipe/${recipe.id}`);
}

export async function deleteRecipe(id: string) {
  const res = await fetch(`http://localhost:3000/recipes/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete data");
  }

  revalidateTag(id);
  revalidatePath("/recipes");
  redirect("/recipes");
}
