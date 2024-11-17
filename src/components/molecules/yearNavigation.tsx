"use client";

import styled from "styled-components";
import arrowLeftLong from "@/public/arrowLeftLong.svg";
import arrowRightLong from "@/public/arrowRightLong.svg";
import Image from "next/image";
import { useState } from "react";

const Wrapper = styled.div`
  height: 4rem;
  /* margin-bottom: 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};

  h2 {
    color: ${({ theme }) => theme.colours.brown};
  }
`;

const Button = styled.button<{ hidden?: boolean }>`
  display: flex;
  visibility: ${({ hidden }) => hidden && "hidden"};
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: 100%;
`;

type YearNavigationProps = {
  activeYear: number;
  setActiveYear: React.Dispatch<React.SetStateAction<number>>;
};

export default function YearNavigation({
  activeYear,
  setActiveYear,
}: YearNavigationProps) {
  function nextYear() {
    setActiveYear((prev) => (prev += 1));
  }

  function previousYear() {
    setActiveYear((prev) => (prev -= 1));
  }

  return (
    <Wrapper>
      <Button onClick={previousYear}>
        <Image src={arrowLeftLong} width={80} alt="" />
      </Button>
      <h2>{activeYear}</h2>
      <Button
        onClick={nextYear}
        hidden={activeYear === new Date().getFullYear() && true}
      >
        <Image src={arrowRightLong} width={80} alt="" />
      </Button>
    </Wrapper>
  );
}
