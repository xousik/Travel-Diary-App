import styled from "styled-components";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export const Wrapper = styled.div<{ $isloged: number }>`
  display: flex;
  justify-content: space-between;
  height: ${({ $isloged }) => ($isloged ? "92%" : "100%")};
  width: 100%;
  overflow: hidden;
`;

export const StyledImage = styled(Image)<{ $isloged: number }>`
  width: 100%;
  height: ${({ $isloged }) => ($isloged ? "100%" : "90%")};
  border-radius: 1rem;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 576px) {
    width: 91%;
    height: 52%;
    margin: 0 auto;
    margin-bottom: 6.5rem;
    box-shadow: 0px 0px 15px 5px #ececec;
  }

  @media (max-width: 400px) {
    height: 50%;
    margin-bottom: 8rem;
  }
`;

export const OuterWrapper = styled.div<{ $isloged: number }>`
  background-color: transparent;
  width: calc(40% - 1rem);
  height: calc(90% - 2rem);
  margin: auto;
  perspective: 1000px;

  @media (max-width: 576px) {
    display: ${({ $isloged }) => ($isloged ? "none" : "block")};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
`;

export const InnerWrapper = styled.div<{ $isactive: number }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  transform: ${({ $isactive }) => $isactive && "rotateY(180deg)"};
`;

export const StyledTilt = styled(Tilt)`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  &:hover {
    cursor: none;
  }
`;

export const Container = styled.div`
  width: 50vw;
  height: 100%;

  @media (max-width: 576px) {
    flex-grow: 1;
  }
`;

export const BackSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: linear-gradient(
    180deg,
    rgb(98, 83, 72) 5%,
    rgb(161, 120, 104) 40%,
    rgba(245, 181, 95, 1) 57%,
    rgba(250, 189, 83, 1) 69%,
    rgba(223, 214, 204, 1) 85%
  );
  border-radius: 20px;
  /* filter: blur(2px); */
  /* -webkit-filter: blur(2px); */
  z-index: -9;
`;
