"use cllient";

import LogedHeader from "@/src/components/molecules/logedHeader";
import YearNavigation from "@/src/components/molecules/yearNavigation";
import { TravelCardsWrapper } from "../../app/logedin/page.styles";
import TravelCard from "@/src/components/molecules/travelCard";
import { useContext } from "react";
import { ShowMoreButtonContext } from "@/src/context/showMoreButtonContext";

export default function ShowMore({ userName }: { userName: string }) {
  const {
    setIsActive,
  }: {
    setIsActive?: (
      value: (prev: boolean) => boolean
    ) => React.MouseEventHandler<HTMLButtonElement> | undefined;
  } = useContext(ShowMoreButtonContext);
  return (
    <>
      <LogedHeader userName={userName!} />
      <button onClick={() => setIsActive!((prev) => !prev)}>ShowLess</button>
      {/* Year navigation */}
      <YearNavigation />
      {/* Div with Travel Cards */}
      <TravelCardsWrapper>
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
      </TravelCardsWrapper>
    </>
  );
}
