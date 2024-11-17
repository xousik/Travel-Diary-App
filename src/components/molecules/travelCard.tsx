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
import deleteSvg from "@/public/delete.svg";

const Wrapper = styled.div`
  position: relative;
  width: 28rem;
  height: 8rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 0px 10px 2px rgba(63, 32, 15, 0.8);
  cursor: pointer;

  @media (max-width: 576px) {
    width: 90vw;
    height: 7rem;
  }
`;
const IconImage = styled(Image)`
  position: absolute;
  right: 4rem;
  top: 2rem;
  @media (max-width: 576px) {
    width: 45px;
    height: 45px;
    right: 4rem;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem 0 0 0.5rem;
  width: 66%;
  height: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.brown};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (max-width: 576px) {
    padding: 0.5rem 0 0 0.5rem;
    h3 {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

type TravelCardProps = {
  id: string;
  title?: string;
  date?: string;
  icon?: string;
  description?: string;
  images?: string[];
  handleDelete: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    id: string
  ) => void;
};

export default function TravelCard({
  id,
  title,
  date,
  icon,
  description,
  images,
  handleDelete,
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
      <IconImage
        src={handleIconSelect(icon!)}
        alt="mountain icon"
        width={55}
        height={55}
      />
      <StyledImage
        src={deleteSvg}
        alt="delete icon"
        width={25}
        height={25}
        onClick={(e) => handleDelete(e, id)}
      />
    </Wrapper>
  );
}
