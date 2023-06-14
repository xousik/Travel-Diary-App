import styled from "styled-components";
import Image from "next/image";
import backgroundImg from "@/public/backgroundImg.jpg";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
`;

const StyledImage = styled(Image)`
  width: 50vw;
  height: 100vh;
`;

const Container = styled.div`
  width: 50vw;
  height: 100vh;
`;

type childrenProp = {
  children: React.ReactNode;
};

export default function BackgroundImgLayout({ children }: childrenProp) {
  return (
    <Wrapper>
      <Container>{children}</Container>
      <StyledImage src={backgroundImg} alt="campervan on desert" />
    </Wrapper>
  );
}
