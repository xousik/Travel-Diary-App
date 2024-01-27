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
};

export default function LogedInDefault({ userName }: { userName: string }) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Is that path ok ? Or should change it to work properly on production
        const response = await fetch("http://localhost:3000/api/diary");
        const data = await response.json();
        setDiaries(data);
      } catch (error) {
        console.error("Error fetching user diaries:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <LogedHeader userName={userName!} />
      <BackgroundImgLayout isactive={isActive}>
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
              <Image src={arrowRight} width={25} alt="arrow right icon" />
            </ShowMoreButton>
          </InnerWrapper>
          <TravelCardsWrapper>
            {diaries.map((diary: Diary) => (
              <TravelCard key={diary.id} title={diary.title} />
            ))}
          </TravelCardsWrapper>
        </Wrapper>
      </BackgroundImgLayout>
    </>
  );
}
