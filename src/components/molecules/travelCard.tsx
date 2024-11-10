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
  display: flex;
  align-items: center;
  justify-content: center;
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

const StyledImage = styled(Image)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

const InnerWrapper = styled.div`
  width: 10rem;
  margin-right: 5rem;
  margin-left: -6rem;
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
    width: 30vw;
    margin-left: -3rem;

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
      <Image src={handleIconSelect(icon!)} alt="mountain icon" width={60} />
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
