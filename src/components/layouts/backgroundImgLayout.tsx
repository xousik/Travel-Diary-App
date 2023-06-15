import styled from "styled-components";
import Image from "next/image";
import backgroundImg from "@/public/backgroundImg.jpg";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;

const StyledImage = styled(Image)`
  width: calc(40% - 1rem);
  height: calc(90% - 2rem);
  margin: auto;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  width: 50vw;
  height: 100%;
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
