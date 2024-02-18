"use server";
import Button from "@/app/components/button/Button";
import NavBar from "@/app/components/nav-bar/NavBar";
import Link from "next/link";

export default async function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar>
        <Link href="/recipes">
          <Button label="Back" />
        </Link>
      </NavBar>
      {children}
    </section>
  );
}
