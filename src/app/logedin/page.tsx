"use client";

import LogedinLayout from "@/src/components/layouts/logedInLayout";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Logedin() {
  let name;
  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }
  name = session.user?.name;
  return <LogedinLayout userName={name!} />;
}
