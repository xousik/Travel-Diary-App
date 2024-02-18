"use client";

import { useContext } from "react";
import styled from "styled-components";
import mountainSvg from "@/public/mountain.svg";
import planeSvg from "@/public/plane.svg";
import palmTreeSvg from "@/public/palmTree.svg";
import yachtSvg from "@/public/yacht.svg";
import Image from "next/image";
import { DiaryDetailsModalContext } from "@/src/context/diaryDetailsModalContext";
import { DiaryDetailsModalContextProps } from "../organisms/diaryDetailsModal/diaryDetailsModal";

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
  icon?: string;
  description?: string;
  images?: string[];
};

export default function TravelCard({
  title,
  date,
  icon,
  description,
  images,
}: TravelCardProps) {
  const {
    setActiveTravelCardInfo,
    setIsModalOpen,
  }: DiaryDetailsModalContextProps = useContext(DiaryDetailsModalContext);

  const handleTravelCardClick = (
    title: string,
    description: string,
    images: string[]
  ) => {
    setActiveTravelCardInfo!({ title, description, images });
    setIsModalOpen!((prev) => !prev);
  };

  const handleIconSelect = (icon: string) => {
    // setChoosenIcon(icon);
    switch (icon) {
      case "mountain":
        return mountainSvg;
      case "palmTree":
        return palmTreeSvg;
      case "plane":
        return planeSvg;
      case "yacht":
        return yachtSvg;
      default:
        return mountainSvg;
    }
  };

  return (
    <Wrapper
      onClick={() => handleTravelCardClick!(title!, description!, images!)}
    >
      <InnerWrapper>
        <h3>{title}</h3>
        <span>{date}</span>
      </InnerWrapper>
      <Image src={handleIconSelect(icon!)} alt="mountain icon" width={60} />
    </Wrapper>
  );
}
