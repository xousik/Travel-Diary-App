import React from "react";
import AppProviders from "./appProviders";
import "./css/globals.css";

const metadata = {
  title: "Travel Diary App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <AppProviders>{children}</AppProviders>
    </html>
  );
}
