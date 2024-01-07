"use client";

import styled from "styled-components";
import Image from "next/image";
import backgroundImg from "@/public/backgroundImg.jpg";
import Tilt from "react-parallax-tilt";

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

const StyledTilt = styled(Tilt)`
  width: calc(40% - 1rem);
  height: calc(90% - 2rem);
  margin: auto;

  &:hover {
    cursor: none;
  }
`;

const Container = styled.div`
  width: 50vw;
  height: 100%;
`;

export default function BackgroundImgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Container>{children}</Container>
      <StyledTilt
        tiltReverse={true}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={0.95}
        transitionSpeed={2000}
      >
        <StyledImage src={backgroundImg} alt="campervan on desert" />
      </StyledTilt>
    </Wrapper>
  );
}
