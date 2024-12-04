import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authCookie = cookies().get("auth-storage");
  
  if (!authCookie) {
    redirect("/login");
  }

  return <>{children}</>;
}