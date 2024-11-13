import { useState, useEffect } from "react";
import BackgroundImgLayout from "./backgroundImgLayout/backgroundImgLayout";
import PrimaryButton from "@/src/components/atoms/primaryButton";
import ShowMoreButton from "@/src/components/atoms/showMoreButton";
import arrowRight from "../../../public/arrowRight.svg";
import Image from "next/image";
import LogedHeader from "@/src/components/molecules/logedHeader";
import {
  Wrapper,
  TravelCardsWrapper,
  InnerWrapper,
} from "@/src/app/logedin/page.styles";
import TravelCards from "../organisms/travelCards/travelCards";
import DiaryDetailsModal from "../organisms/diaryDetailsModal/diaryDetailsModal";

export default function LogedInDefault({ userName }: { userName: string }) {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [howManyDiaries, setHowManyDiaries] = useState<number>();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleRefresh = () => {
    // Toggle the state to trigger a re-render of the child component
    setRefresh((prevRefresh) => !prevRefresh);
  };

  useEffect(() => {
    const windowWidth = window !== undefined ? window.innerWidth : NaN;
    if (windowWidth < 426) setIsMobile(true);
  }, []);

  return (
    <>
      <DiaryDetailsModal isMobile={isMobile} />
      <LogedHeader userName={userName!} />
      <BackgroundImgLayout isLoged={true} handleRefresh={handleRefresh}>
        <Wrapper>
          <PrimaryButton
            width={15}
            height={4.4}
            fontSize={30}
            isActive={true}
            isMobile={isMobile}
          >
            Create new diary
          </PrimaryButton>
          <InnerWrapper>
            <span>Recent diaries</span>
            <ShowMoreButton howManyDiaries={howManyDiaries!}>
              Show more
              <Image src={arrowRight} width={20} alt="arrow right icon" />
            </ShowMoreButton>
          </InnerWrapper>
          <TravelCardsWrapper>
            <TravelCards
              setHowManyDiaries={setHowManyDiaries}
              refresh={refresh}
              setRefresh={setRefresh}
              areLimited={true}
            />
          </TravelCardsWrapper>
        </Wrapper>
      </BackgroundImgLayout>
    </>
  );
}
