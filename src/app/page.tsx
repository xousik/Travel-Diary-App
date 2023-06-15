"use client";

import MainTitle from "../components/atoms/mainTitle";
import BackgroundImgLayout from "../components/layouts/backgroundImgLayout";
import styled from "styled-components";
import Input from "../components/molecules/input";
import Link from "next/link";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sentence = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;
  width: 40rem;
  margin: 0 auto 6rem auto;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RegisterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.beige};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
`;

const ForgotPasswordLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-decoration: none;
`;

const SignInButton = styled.button`
  width: 9rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.beige};
  border: none;
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBeige};
  }
`;

export default function Home() {
  return (
    <BackgroundImgLayout>
      <Wrapper>
        <MainTitle />
        <Sentence>
          Dont let your memories fade, create your travel diary and come back to
          those beautiful moments.
        </Sentence>
        <form action="">
          <Input name="E-mail" inputType="email" />
          <Input name="Password" inputType="password" />
          <InnerWrapper>
            <RegisterLink href="/register">Register</RegisterLink>
            <ForgotPasswordLink href="">Forgot Password</ForgotPasswordLink>
            <SignInButton type="submit">Sign In</SignInButton>
          </InnerWrapper>
        </form>
      </Wrapper>
    </BackgroundImgLayout>
  );
}
