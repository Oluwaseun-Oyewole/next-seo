import { createCookiesSession } from "@/lib/cookies";
import { FormState, SignupFormSchema } from "@/lib/validations";
import { redirect } from "next/navigation";

export default async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  await createCookiesSession("");
  redirect("/");
}

// const test = new TextEncoder().encode(secret);
