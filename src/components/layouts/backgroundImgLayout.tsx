"use client";

import styled from "styled-components";
import Image from "next/image";
import backgroundImg from "@/public/backgroundImg.jpg";
import Tilt from "react-parallax-tilt";
import CreateNewDiaryForm from "../organisms/createNewDiaryForm";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 92%;
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.25);
`;

const OuterWrapper = styled.div`
  background-color: transparent;
  width: calc(40% - 1rem);
  height: calc(90% - 2rem);
  margin: auto;
  perspective: 1000px;
`;

const InnerWrapper = styled.div<{ isactive: number }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  transform: ${({ isactive }) => isactive && "rotateY(180deg)"};
`;

const StyledTilt = styled(Tilt)`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  &:hover {
    cursor: none;
  }
`;

const Container = styled.div`
  width: 50vw;
  height: 100%;
`;

const BackSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: linear-gradient(
    180deg,
    rgba(151, 202, 232, 1) 0%,
    rgba(169, 192, 209, 1) 13%,
    rgba(232, 159, 131, 1) 25%,
    rgba(236, 166, 120, 1) 50%,
    rgba(245, 181, 95, 1) 57%,
    rgba(250, 189, 83, 1) 69%,
    rgba(223, 214, 204, 1) 85%
  );
  border-radius: 20px;
  /* filter: blur(2px); */
  /* -webkit-filter: blur(2px); */
  z-index: -9;
`;

export default function BackgroundImgLayout({
  children,
  isactive,
  handleRefresh,
}: {
  children: React.ReactNode;
  isactive?: boolean | undefined;
  handleRefresh?: () => void;
}) {
  return (
    <Wrapper>
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
            <StyledImage src={backgroundImg} alt="campervan on desert" />
          </StyledTilt>
          <BackSide>
            <CreateNewDiaryForm handleRefresh={handleRefresh!} />
          </BackSide>
        </InnerWrapper>
      </OuterWrapper>
    </Wrapper>
  );
}
