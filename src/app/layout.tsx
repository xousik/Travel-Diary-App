import "./css/globals.css";
import AppProviders from "./appProviders";
import React from "react";

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
