"use client";

import React from "react";
import StyledComponentsRegistry from "@/src/lib/registry";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./css/theme";
import { EB_Garamond } from "next/font/google";
import { ShowMoreButtonContextProvider } from "../context/showMoreButtonContext";
import { DiaryDetailsModalContextProvider } from "../context/diaryDetailsModalContext";
import { BackgroundImageStateContextProvider } from "../context/backgroundImageStateContext";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

const garamond = EB_Garamond({ subsets: ["latin"] });

const StyledBody = styled.body`
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function AppProviders({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <ThemeProvider theme={theme}>
      <ShowMoreButtonContextProvider>
        <DiaryDetailsModalContextProvider>
          <BackgroundImageStateContextProvider>
            <StyledBody className={garamond.className}>
              <SessionProvider session={session}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
              </SessionProvider>
            </StyledBody>
          </BackgroundImageStateContextProvider>
        </DiaryDetailsModalContextProvider>
      </ShowMoreButtonContextProvider>
    </ThemeProvider>
  );
}
