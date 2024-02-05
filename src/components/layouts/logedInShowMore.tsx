import styled from "styled-components";
import LogedHeader from "@/src/components/molecules/logedHeader";
import YearNavigation from "@/src/components/molecules/yearNavigation";
import { TravelCardsWrapper } from "../../app/logedin/page.styles";
import ShowMoreButton from "../atoms/showMoreButton";
import Image from "next/image";
import arrowRight from "@/public/arrowRight.svg";
import { TravelCards } from "./logedInDefault";

const OuterWrapper = styled.div`
  max-height: 100%;
`;

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
  align-content: start;
  padding: 2rem 0;
`;

const StyledShowMoreButton = styled(ShowMoreButton)`
  /* font-weight: ${({ theme }) => theme.fontWeight.bold}; */
`;

const StyledImage = styled(Image)`
  transform: rotate(0.5turn);
`;

export default function LogedInShowMore({ userName }: { userName: string }) {
  return (
    <OuterWrapper>
      <LogedHeader userName={userName!} />
      {/* Year navigation */}
      <YearNavigation />
      <Wrapper>
        <StyledShowMoreButton>
          <StyledImage src={arrowRight} width={20} alt="arrow right icon" />
          Show Less
        </StyledShowMoreButton>
      </Wrapper>
      {/* Div with Travel Cards */}
      <StyledTravelCardsWrapper>
        <TravelCards areLimited={false} />
      </StyledTravelCardsWrapper>
    </OuterWrapper>
  );
}
