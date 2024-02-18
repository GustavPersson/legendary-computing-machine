"use server";
import { editRecipe, getRecipe } from "@/app/recipe/[id]/actions";
import RecipeForm from "@/app/recipe/[id]/components/RecipeForm";

export default async function Page({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);

  return (
    <main>
      <div className="container mx-auto grid grid-cols-1">
        <h1 className="text-2xl font-bold text-center mt-4 mb-8">
          Edit Recipe
        </h1>
        <RecipeForm recipe={recipe} formAction={editRecipe} />
      </div>
    </main>
  );
}
