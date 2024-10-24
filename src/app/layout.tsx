import React from "react";
import AppProviders from "./appProviders";
import "./css/globals.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/lib/authOptions";

const metadata = {
  title: "Travel Diary App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head></head>
      <AppProviders session={session}>{children}</AppProviders>
    </html>
  );
}
