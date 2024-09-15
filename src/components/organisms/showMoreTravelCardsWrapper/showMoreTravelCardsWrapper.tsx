/* The idea is to handle showmore years navigation in that component - something like horizontal carousele with hidden overload   */

import styled from "styled-components";
import TravelCards from "../travelCards/travelCards";
import { SetStateAction } from "react";
import { TravelCardsWrapper } from "@/src/app/logedin/page.styles";

type ShowMoreTravelCardsWrapperProps = {
  setRefresh: React.Dispatch<SetStateAction<boolean>>;
  refresh: boolean;
  activeYear: number;
};

const StyledTravelCardsWrapper = styled(TravelCardsWrapper)`
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-content: start;
  padding: 2rem 0;
`;

export default function ShowMoreTravelCardsWrapper({
  setRefresh,
  refresh,
  activeYear,
}: ShowMoreTravelCardsWrapperProps) {
  return (
    <StyledTravelCardsWrapper>
      <TravelCards
        areLimited={false}
        setRefresh={setRefresh}
        refresh={refresh}
        activeYear={activeYear}
      />
    </StyledTravelCardsWrapper>
  );
}
