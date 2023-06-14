"use client";
import "./css/globals.css";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import StyledComponentsRegistry from "@/src/lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "./css/theme";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Diary App",
};

const StyledBody = styled.body`
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <ThemeProvider theme={theme}>
        <StyledBody className={garamond.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </StyledBody>
      </ThemeProvider>
    </html>
  );
}
