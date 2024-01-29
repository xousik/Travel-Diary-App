"use client";

import { useState, useEffect } from "react";
import BackgroundImgLayout from "./backgroundImgLayout";
import PrimaryButton from "@/src/components/atoms/primaryButton";
import TravelCard from "@/src/components/molecules/travelCard";
import ShowMoreButton from "@/src/components/atoms/showMoreButton";
import arrowRight from "../../../public/arrowRight.svg";
import Image from "next/image";
import LogedHeader from "@/src/components/molecules/logedHeader";
import {
  Wrapper,
  TravelCardsWrapper,
  InnerWrapper,
} from "@/src/app/logedin/page.styles";

type Diary = {
  id: string;
  userId: string;
  title: string;
  description: string;
  date: string;
};

export default function LogedInDefault({ userName }: { userName: string }) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const handleRefresh = () => {
    // Toggle the state to trigger a re-render of the child component
    setRefresh((prevRefresh) => !prevRefresh);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Is that path ok ? Or should change it to work properly on production
        const response = await fetch("http://localhost:3000/api/diary");
        const data = await response.json();

        // Set max amount of travel cards to 3
        setDiaries(data.slice(-3).reverse());
      } catch (error) {
        console.error("Error fetching user diaries:", error);
      }
    };

    fetchData();
  }, [refresh]);

  return (
    <>
      <LogedHeader userName={userName!} />
      <BackgroundImgLayout
        isLoged={true}
        isactive={isActive}
        handleRefresh={handleRefresh}
      >
        <Wrapper>
          <PrimaryButton
            onClick={setIsActive}
            width={15}
            height={4.4}
            fontSize={30}
          >
            Create new diary
          </PrimaryButton>
          <InnerWrapper>
            <span>Recent diaries</span>
            <ShowMoreButton>
              Show more
              <Image src={arrowRight} width={20} alt="arrow right icon" />
            </ShowMoreButton>
          </InnerWrapper>
          <TravelCardsWrapper>
            {diaries.map((diary: Diary) => (
              <TravelCard
                key={diary.id}
                title={diary.title}
                date={diary.date}
              />
            ))}
          </TravelCardsWrapper>
        </Wrapper>
      </BackgroundImgLayout>
    </>
  );
}
