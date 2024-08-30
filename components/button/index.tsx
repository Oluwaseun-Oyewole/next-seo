"use client";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button aria-disabled={pending} type="submit">
      {pending ? "Submitting..." : "Sign up"}
    </button>
  );
};
