"use client";
import React from "react";
import type { RecipeType } from "@/schemas/recipe";
import { ExtraIngredient } from "../edit/components/ExtraIngredient";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";

type Props = {
  recipe?: RecipeType;
  formAction: (
    prevState: any,
    formData: FormData
  ) => Promise<{
    message: string;
  }>;
};

const initialState = {
  message: "",
};

const RecipeForm: React.FC<Props> = ({ formAction, recipe }) => {
  const [state, action] = useFormState(formAction, initialState);

  return (
    <form action={action}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        <input type="hidden" name="id" value={recipe?.id} />
        <label className="flex flex-col">
          <span className="font-bold">Title:</span>
          <input
            required
            aria-required
            type="text"
            name="title"
            defaultValue={recipe?.title}
            className="border border-gray-300 rounded-md p-2 text-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Description:</span>
          <textarea
            required
            aria-required
            name="description"
            defaultValue={recipe?.description}
            className="border border-gray-300 rounded-md p-2 text-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Ingredients:</span>
          {recipe?.ingredients.map((ingredient) => (
            <input
              name="ingredients"
              key={ingredient}
              type="text"
              defaultValue={ingredient}
              className="border border-gray-300 rounded-md p-2 text-black mb-2"
            />
          ))}
          <ExtraIngredient />
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Instructions:</span>
          <textarea
            required
            aria-required
            name="instructions"
            defaultValue={recipe?.instructions}
            className="border border-gray-300 rounded-md p-2 text-black h-full"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Image URL:</span>
          <input
            name="imageUrl"
            type="text"
            defaultValue={recipe?.imageUrl}
            className="border border-gray-300 rounded-md p-2 text-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Source URL:</span>
          <input
            name="sourceUrl"
            type="text"
            defaultValue={recipe?.sourceUrl}
            className="border border-gray-300 rounded-md p-2 text-black"
          />
        </label>
      </div>
      {state?.message && (
        <div className="grid mt-4 bg-red-800 mx-8 rounded p-2">
          <p aria-live="polite" className="place-self-center text-white">
            {state?.message}
          </p>
        </div>
      )}
      <div className="grid m-4">
        <div className="max-w-48 place-self-center">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

export default RecipeForm;
