import { decrypt } from "@/lib/sessions";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile"];
const publicRoutes = ["/login", "/signup", "/"];
export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = await request.cookies.get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.name) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (
    isPublicRoute &&
    session?.name &&
    !request.nextUrl.pathname.startsWith("/profile")
  ) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
