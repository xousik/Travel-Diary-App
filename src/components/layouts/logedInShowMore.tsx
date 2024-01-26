"use cllient";

import styled from "styled-components";
import LogedHeader from "@/src/components/molecules/logedHeader";
import YearNavigation from "@/src/components/molecules/yearNavigation";
import { TravelCardsWrapper } from "../../app/logedin/page.styles";
import TravelCard from "@/src/components/molecules/travelCard";
import { useContext } from "react";
import { ShowMoreButtonContext } from "@/src/context/showMoreButtonContext";
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

export default function LogedInShowMore({ userName }: { userName: string }) {
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
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
      </StyledTravelCardsWrapper>
    </div>
  );
}
