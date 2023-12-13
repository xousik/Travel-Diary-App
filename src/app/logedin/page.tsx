import BackgroundImgLayout from "../../components/layouts/backgroundImgLayout";
import PrimaryButton from "@/src/components/atoms/primaryButton";
import TravelCard from "@/src/components/molecules/travelCard";
import ShowMoreButton from "@/src/components/atoms/showMoreButton";
import arrowRight from "../../../public/arrowRight.svg";
import Image from "next/image";
import LogedHeader from "@/src/components/molecules/logedHeader";
import { Wrapper, TravelCardsWrapper, InnerWrapper } from "./page.styles";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function logedin() {
  let name;
  const session = await getServerSession(authOptions);

  console.log(session);

  if (session) {
    // name: string
    name = session.user?.name;
  } else {
    // redirect("/");
  }

  return (
    <BackgroundImgLayout>
      <LogedHeader userName={name!} />
      <Wrapper>
        <PrimaryButton width={15} height={4.4} fontSize={30}>
          Create new diary
        </PrimaryButton>
        <TravelCardsWrapper>
          <InnerWrapper>
            <span>Recent diaries</span>
            <ShowMoreButton>
              Show more
              <Image src={arrowRight} width={25} alt="arrow right icon" />
            </ShowMoreButton>
          </InnerWrapper>
          <TravelCard />
          <TravelCard />
          <TravelCard />
        </TravelCardsWrapper>
      </Wrapper>
    </BackgroundImgLayout>
  );
}
