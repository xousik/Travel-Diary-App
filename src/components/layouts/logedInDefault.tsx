"use client";

import { useState } from "react";
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

export default function LogedInDefault({ userName }: { userName: string }) {
  const [isActive, setIsActive] = useState<boolean>(false);
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
            <TravelCard />
            <TravelCard />
            <TravelCard />
          </TravelCardsWrapper>
        </Wrapper>
      </BackgroundImgLayout>
    </>
  );
}
