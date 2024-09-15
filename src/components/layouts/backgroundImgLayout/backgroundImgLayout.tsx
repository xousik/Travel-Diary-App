"use client";

import backgroundImg from "@/public/backgroundImg.jpg";
import CreateNewDiaryForm from "../../organisms/createNewDiaryForm/createNewDiaryForm";
import {
  Wrapper,
  Container,
  OuterWrapper,
  InnerWrapper,
  StyledTilt,
  StyledImage,
  BackSide,
} from "./backgroundImgLayout.styles";
import { useContext } from "react";
import { BackgroundImageStateContext } from "@/src/context/backgroundImageStateContext";

export default function BackgroundImgLayout({
  children,
  isLoged,
  handleRefresh,
}: {
  children: React.ReactNode;
  isLoged?: boolean;
  handleRefresh?: () => void;
}) {
  const {
    isActive,
  }: {
    isActive?: boolean;
  } = useContext(BackgroundImageStateContext);

  return (
    <Wrapper $isloged={isLoged! ? 1 : 0}>
      <Container>{children}</Container>
      <OuterWrapper>
        <InnerWrapper $isactive={isActive ? 1 : 0}>
          <StyledTilt
            tiltReverse={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={0.95}
            transitionSpeed={2000}
          >
            <StyledImage
              $isloged={isLoged! ? 1 : 0}
              src={backgroundImg}
              alt="campervan on desert"
            />
          </StyledTilt>
          <BackSide>
            <CreateNewDiaryForm handleRefresh={handleRefresh!} />
          </BackSide>
        </InnerWrapper>
      </OuterWrapper>
    </Wrapper>
  );
}
