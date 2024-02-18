import Link from "next/link";
import Button from "../components/button/Button";
import { getRecipes } from "./actions";
import RecipeCard from "./components/RecipeCard";

export default async function Page() {
  const recipes = await getRecipes();

  return (
    <main>
      <div className="container mx-auto py-4 px-4">
        <h2 className={`mb-4 text-2xl font-semibold text-center`}>Recipes</h2>
        <div className="flex mb-4">
          <Link href="/recipe/add" className="mx-auto">
            <Button label="Add Recipe" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  );
}
