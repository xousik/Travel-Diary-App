"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28rem;
  height: 8rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colours.lightGrey};
  box-shadow: 0px 0px 10px 2px rgba(63, 32, 15, 0.8);
  cursor: pointer;

  @media (max-height: 730px) {
    height: 7rem;
  }

  @media (max-width: 576px) {
    width: 90vw;
    height: 7rem;
  }
`;

const InnerWrapper = styled.div`
  width: 10rem;
  margin-right: 5rem;
  margin-left: -4rem;
  text-align: center;
  color: ${({ theme }) => theme.colours.brown};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  h3,
  span {
    width: 8rem;
    height: 2rem;
    background-color: grey;
    border-radius: 0.5rem;
  }

  @media (max-width: 576px) {
    width: 30vw;
    margin-left: -3rem;

    h3 {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

const ImagePlaceHolder = styled.div`
  width: 60px;
  height: 60px;
  background-color: grey;
  border-radius: 0.5rem;
`;

const DeleteImagePlaceholder = styled.div`
  width: 25px;
  height: 25px;
  background-color: grey;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border-radius: 0.5rem;
`;

export default function SkeletonTravelCard() {
  return (
    <Wrapper>
      <InnerWrapper>
        <h3 />
        <span />
      </InnerWrapper>
      <ImagePlaceHolder />
      <DeleteImagePlaceholder />
    </Wrapper>
  );
}
