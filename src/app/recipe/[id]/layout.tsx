"use client";
import Button from "@/app/components/button/Button";
import NavBar from "@/app/components/nav-bar/NavBar";
import { deleteRecipe } from "@/app/recipe/[id]/actions";
import { usePathname } from "next/navigation";
import Modal from "@/app/components/modal/Modal";
import { useState } from "react";
import Link from "next/link";

export default function RecipeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const onConfirm = async () => {
    try {
      await deleteRecipe(params.id);
    } catch (error) {
      setShowModal(false);
      setShowErrorModal(true);
    }
  };

  const onCancel = () => {
    setShowModal(false);
    setShowErrorModal(false);
  };

  return (
    <section>
      <NavBar>
        <Link
          href={pathname.includes("edit") ? `/recipe/${params.id}` : "/recipes"}
        >
          <Button label="Back" />
        </Link>
        {!pathname.includes("edit") && (
          <Link href={`/recipe/${params.id}/edit`}>
            <Button label="Edit" />
          </Link>
        )}
        {pathname.includes("edit") && (
          <Button
            label="Delete"
            variant="danger"
            onClick={async () => {
              setShowModal(true);
            }}
          />
        )}
      </NavBar>
      {children}
      {showModal && (
        <Modal
          title="Delete recipe?"
          body={"This can not be reversed. Are you sure?"}
          confirmButtonLabel="Delete"
          confirmButtonVariant="danger"
          cancelButtonVariant="primary"
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
      {showErrorModal && (
        <Modal
          title="Error"
          body={"Something went wrong. Please try again."}
          confirmButtonLabel="Close"
          onConfirm={onCancel}
        />
      )}
    </section>
  );
}
