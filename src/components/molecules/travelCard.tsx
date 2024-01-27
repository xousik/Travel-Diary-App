"use client";

import styled from "styled-components";
import mountainSVG from "../../../public/mountain.svg";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 28rem;
  height: 8rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 0px 10px 2px rgba(63, 32, 15, 0.8);
  cursor: pointer;
`;

const InnerWrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.brown};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

type TravelCardProps = {
  title?: string;
  date?: string;
};

export default function TravelCard({ title, date }: TravelCardProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <h3>{title}</h3>
        <span>{date}</span>
      </InnerWrapper>
      <Image src={mountainSVG} alt="mountain icon" width={60} />
    </Wrapper>
  );
}
