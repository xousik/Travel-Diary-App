"use client";

import styled from "styled-components";
import arrowLeftLong from "@/public/arrowLeftLong.svg";
import arrowRightLong from "@/public/arrowRightLong.svg";
import Image from "next/image";

const Wrapper = styled.div`
  height: 4rem;
  /* margin-bottom: 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};

  h2 {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: 100%;
`;

export default function YearNavigation() {
  return (
    <Wrapper>
      <Button>
        <Image src={arrowLeftLong} width={80} alt="" />
      </Button>
      <h2>2023</h2>
      <Button>
        <Image src={arrowRightLong} width={80} alt="" />
      </Button>
    </Wrapper>
  );
}
