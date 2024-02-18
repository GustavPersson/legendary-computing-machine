"use server";
import Image from "@/app/components/image/Image";
import { getRecipe } from "./actions";

export default async function Page({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);

  return (
    <main>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <div className="container pb-4">
            <Image src={recipe.imageUrl} alt={recipe.title} />
          </div>
          <h1 className={`mb-4 text-3xl font-semibold text-center`}>
            {recipe.title}
          </h1>
          <p className="mb-4">{recipe.description}</p>
        </div>
        <div className="mb-4 md:order-3">
          <h2 className="mb-2 text-xl font-semibold">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li className="py-2 border-b" key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold">Instructions</h2>
          <p className="whitespace-pre-wrap">{recipe.instructions}</p>
        </div>
      </div>
    </main>
  );
}
