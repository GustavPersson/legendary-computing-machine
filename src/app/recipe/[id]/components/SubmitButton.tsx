"use client";

import Button from "@/app/components/button/Button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      isLoading={pending}
      label="Save"
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    />
  );
}
