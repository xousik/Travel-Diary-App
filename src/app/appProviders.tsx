"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "./css/theme";
import { EB_Garamond } from "next/font/google";
import StyledComponentsRegistry from "@/src/lib/registry";
import styled from "styled-components";
import React from "react";

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
      <StyledBody className={garamond.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </StyledBody>
    </ThemeProvider>
  );
}
