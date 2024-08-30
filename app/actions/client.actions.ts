import { createCookiesSession } from "@/lib/cookies";
import { SessionPayload } from "@/lib/sessions";
import { redirect } from "next/navigation";

export async function clientLogin(payload: SessionPayload) {
  createCookiesSession(payload.name);
  return redirect("/profile");
}
