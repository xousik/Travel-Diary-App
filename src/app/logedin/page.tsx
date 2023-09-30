import BackgroundImgLayout from "../../components/layouts/backgroundImgLayout";
import PrimaryButton from "@/src/components/atoms/primaryButton";
import TravelCard from "@/src/components/molecules/travelCard";
import arrowRight from "../../../public/arrowRight.svg";
import Image from "next/image";
import LogedHeader from "@/src/components/molecules/logedHeader";
import { Wrapper } from "./page.styles";
import { TravelCardsWrapper } from "./page.styles";
import { InnerWrapper } from "./page.styles";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function logedin() {
  let name;
  const session = await getServerSession(authOptions);
  if (session) {
    name = session.user?.name;
  } else {
    redirect("/");
  }

  return (
    <BackgroundImgLayout>
      <LogedHeader userName={name} />
      <Wrapper>
        <PrimaryButton width={18} height={4.7} fontSize={30}>
          Create new diary
        </PrimaryButton>
        <TravelCardsWrapper>
          <InnerWrapper>
            <span>Recent diaries</span>
            <button>
              Show more
              <Image src={arrowRight} width={25} alt="arrow right icon" />
            </button>
          </InnerWrapper>
          <TravelCard />
          <TravelCard />
          <TravelCard />
        </TravelCardsWrapper>
      </Wrapper>
    </BackgroundImgLayout>
  );
}
