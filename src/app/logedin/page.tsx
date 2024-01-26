import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogedinLayout from "@/src/components/layouts/logedInLayout";
import { redirect } from "next/navigation";

export default async function Logedin() {
  let name;
  const session = await getServerSession(authOptions);

  if (session) {
    name = session.user?.name;
  } else {
    redirect("/");
  }

  return <LogedinLayout userName={name!} />;
}
