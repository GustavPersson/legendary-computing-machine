"use server";
import { createRecipe } from "@/app/recipe/add/actions";
import RecipeForm from "@/app/recipe/[id]/components/RecipeForm";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <div className="container mx-auto grid grid-cols-1 px-8">
        <h1 className="text-2xl font-bold text-center mt-4 mb-8">
          Create Recipe
        </h1>
        <RecipeForm formAction={createRecipe} />
      </div>
    </main>
  );
}
