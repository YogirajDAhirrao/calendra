import PrivateNavBar from "@/components/PrivateNavBar";
import PublicNavBar from "@/components/PublicNavBar";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  return (
    <main className="relative">
      {/* {Render a privatenav bar if user exists otherwise publicnavbar} */}
      {user ? <PrivateNavBar /> : <PublicNavBar />}
      {/* render the children
       */}
      <section className="pt-36">hiii{children}</section>
    </main>
  );
}
