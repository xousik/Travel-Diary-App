import { useState } from "react";
import styled from "styled-components";
import LogedHeader from "@/src/components/molecules/logedHeader";
import YearNavigation from "@/src/components/molecules/yearNavigation";
import ShowMoreButton from "../atoms/showMoreButton";
import Image from "next/image";
import arrowRight from "@/public/arrowRight.svg";
import DiaryDetailsModal from "../organisms/diaryDetailsModal/diaryDetailsModal";
import ShowMoreTravelCardsWrapper from "../organisms/showMoreTravelCardsWrapper/showMoreTravelCardsWrapper";

const OuterWrapper = styled.div`
  max-height: 100%;
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
  return (
    <OuterWrapper>
      <DiaryDetailsModal />
      <LogedHeader userName={userName!} />
      {/* Year navigation */}
      <YearNavigation />
      <Wrapper>
        <ShowMoreButton>
          <StyledImage src={arrowRight} width={20} alt="arrow right icon" />
          Show Less
        </ShowMoreButton>
      </Wrapper>
      {/* Div with Travel Cards */}
      <ShowMoreTravelCardsWrapper refresh={refresh} setRefresh={setRefresh} />
    </OuterWrapper>
  );
}
