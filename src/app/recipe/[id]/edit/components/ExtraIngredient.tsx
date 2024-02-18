"use client";
import Button from "@/app/components/button/Button";
import { useState } from "react";

export const ExtraIngredient = () => {
  const [addedIngredients, setAddedIngredients] = useState<string[]>([]);

  return (
    <>
      {addedIngredients.map((value, index) => (
        <input
          key={index}
          name="ingredients"
          type="text"
          className="border border-gray-300 rounded-md p-2 text-black mb-2"
        />
      ))}
      <Button
        label="Add Ingredient"
        onClick={() => setAddedIngredients([...addedIngredients, ""])}
        type="button"
      />
    </>
  );
};
