import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import LogedHeader from "@/src/components/molecules/logedHeader";
import YearNavigation from "@/src/components/molecules/yearNavigation";
import ShowMoreButton from "../atoms/showMoreButton";
import Image from "next/image";
import arrowRight from "@/public/arrowRight.svg";
import DiaryDetailsModal from "../organisms/diaryDetailsModal/diaryDetailsModal";
import ShowMoreTravelCardsWrapper from "../organisms/showMoreTravelCardsWrapper/showMoreTravelCardsWrapper";
import { DiaryDetailsModalContext } from "@/src/context/diaryDetailsModalContext";

const OuterWrapper = styled.div<{ isModalOpen: boolean }>`
  height: ${({ isModalOpen }) => (isModalOpen ? "100%" : "fit-content")};
  overflow: ${({ isModalOpen }) => isModalOpen && "hidden"};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  transform: rotate(0.5turn);
`;

export default function LogedInShowMore({ userName }: { userName: string }) {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [activeYear, setActiveYear] = useState<number>(
    new Date().getFullYear()
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const {
    isModalOpen,
  }: {
    isModalOpen?: boolean;
  } = useContext(DiaryDetailsModalContext);

  useEffect(() => {
    const windowWidth = window !== undefined ? window.innerWidth : NaN;
    if (windowWidth < 426) setIsMobile(true);
  }, []);

  return (
    <OuterWrapper isModalOpen={isModalOpen!}>
      <DiaryDetailsModal isMobile={isMobile} />
      <LogedHeader userName={userName!} />
      {/* Year navigation */}
      <YearNavigation activeYear={activeYear} setActiveYear={setActiveYear} />
      <Wrapper>
        <ShowMoreButton howManyDiaries={4}>
          <StyledImage src={arrowRight} width={20} alt="arrow right icon" />
          Show Less
        </ShowMoreButton>
      </Wrapper>
      {/* Div with Travel Cards */}
      <ShowMoreTravelCardsWrapper
        refresh={refresh}
        setRefresh={setRefresh}
        activeYear={activeYear}
      />
    </OuterWrapper>
  );
}
