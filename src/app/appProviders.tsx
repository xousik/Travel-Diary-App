"use client";

import React from "react";
import StyledComponentsRegistry from "@/src/lib/registry";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./css/theme";
import { EB_Garamond } from "next/font/google";
import { ShowMoreButtonContextProvider } from "../context/showMoreButtonContext";

const garamond = EB_Garamond({ subsets: ["latin"] });

const StyledBody = styled.body`
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <ShowMoreButtonContextProvider>
        <StyledBody className={garamond.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </StyledBody>
      </ShowMoreButtonContextProvider>
    </ThemeProvider>
  );
}
