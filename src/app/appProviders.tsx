"use client";

import React from "react";
import StyledComponentsRegistry from "@/src/lib/registry";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./css/theme";
import { ShowMoreButtonContextProvider } from "../context/showMoreButtonContext";
import { DiaryDetailsModalContextProvider } from "../context/diaryDetailsModalContext";
import { BackgroundImageStateContextProvider } from "../context/backgroundImageStateContext";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

export default function AppProviders({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session | null;
}) {
  return (
    <ThemeProvider theme={theme}>
      <ShowMoreButtonContextProvider>
        <DiaryDetailsModalContextProvider>
          <BackgroundImageStateContextProvider>
            <SessionProvider session={session}>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </SessionProvider>
          </BackgroundImageStateContextProvider>
        </DiaryDetailsModalContextProvider>
      </ShowMoreButtonContextProvider>
    </ThemeProvider>
  );
}
