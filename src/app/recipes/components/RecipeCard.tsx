/* eslint-disable @next/next/no-img-element */
"use server";
import Card from "@/app/components/card/Card";
import Image from "@/app/components/image/Image";
import { RecipeType } from "@/schemas/recipe";
import Link from "next/link";
import React from "react";

const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
      <Card>
        <div className="container">
          <Image src={recipe.imageUrl} alt={recipe.title} />
          <h2 className=" mt-4 text-lg">{recipe.title}</h2>
        </div>
      </Card>
    </Link>
  );
};

export default RecipeCard;
