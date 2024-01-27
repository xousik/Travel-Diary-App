"use cllient";

import { useState, useEffect } from "react";
import styled from "styled-components";
import LogedHeader from "@/src/components/molecules/logedHeader";
import YearNavigation from "@/src/components/molecules/yearNavigation";
import { TravelCardsWrapper } from "../../app/logedin/page.styles";
import TravelCard from "@/src/components/molecules/travelCard";
import ShowMoreButton from "../atoms/showMoreButton";
import Image from "next/image";
import arrowRight from "@/public/arrowRight.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledTravelCardsWrapper = styled(TravelCardsWrapper)`
  /* overflow-y: scroll; */
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  padding: 1rem 0;
`;

const StyledShowMoreButton = styled(ShowMoreButton)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const StyledImage = styled(Image)`
  transform: rotate(0.5turn);
`;

type Diary = {
  id: string;
  userId: string;
  title: string;
  description: string;
  date: string;
};

export default function LogedInShowMore({ userName }: { userName: string }) {
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
    <div>
      <LogedHeader userName={userName!} />
      {/* Year navigation */}
      <YearNavigation />
      <Wrapper>
        <StyledShowMoreButton>
          <StyledImage src={arrowRight} width={25} alt="arrow right icon" />
          Show Less
        </StyledShowMoreButton>
      </Wrapper>
      {/* Div with Travel Cards */}
      <StyledTravelCardsWrapper>
        {diaries.map((diary: Diary) => (
          <TravelCard key={diary.id} title={diary.title} date={diary.date} />
        ))}
      </StyledTravelCardsWrapper>
    </div>
  );
}
