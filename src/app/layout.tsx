import React from "react";
import AppProviders from "./appProviders";
import "./css/globals.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/lib/authOptions";
import { EB_Garamond } from "next/font/google";

const metadata = {
  title: "Travel Diary App",
};

const garamond = EB_Garamond({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className={garamond.className}>
      <head></head>
      <body>
        <AppProviders session={session}>{children}</AppProviders>
      </body>
    </html>
  );
}
