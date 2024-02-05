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

export default function BackgroundImgLayout({
  children,
  isactive,
  isLoged,
  handleRefresh,
}: {
  children: React.ReactNode;
  isactive?: boolean | undefined;
  isLoged?: boolean;
  handleRefresh?: () => void;
}) {
  return (
    <Wrapper isloged={isLoged! ? 1 : 0}>
      <Container>{children}</Container>
      <OuterWrapper>
        <InnerWrapper isactive={isactive ? 1 : 0}>
          <StyledTilt
            tiltReverse={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={0.95}
            transitionSpeed={2000}
          >
            <StyledImage
              isloged={isLoged! ? 1 : 0}
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
