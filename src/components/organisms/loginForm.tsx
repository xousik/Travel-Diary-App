"use client";

import styled from "styled-components";
import Link from "next/link";
import Input from "../atoms/formInput";
import PrimaryButton from "../atoms/primaryButton";
import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";

const StyledForm = styled.form`
  @media (max-width: 576px) {
    width: 100%;
    padding: 4.5rem 1rem 0 1rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RegisterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkBeige};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
`;

export default function LoginForm() {
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    signIn("email", {
      email: emailInputRef.current?.value,
      callbackUrl: "/logedin",
    });
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <Input
        name="E-mail"
        inputType="email"
        ref={emailInputRef}
        hasIcon={true}
      />
      <InnerWrapper>
        <RegisterLink href="/register">Register</RegisterLink>
        <PrimaryButton type="submit" isActive={false}>
          Sign In
        </PrimaryButton>
      </InnerWrapper>
    </StyledForm>
  );
}
