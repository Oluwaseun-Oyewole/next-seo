import { verifySession } from "@/lib/dal";
import { ReactNode } from "react";

const ProtectedRouteLayout = async ({
  children,
}: {
  children: Readonly<ReactNode>;
}) => {
  await verifySession();
  return children;
};

export default ProtectedRouteLayout;
