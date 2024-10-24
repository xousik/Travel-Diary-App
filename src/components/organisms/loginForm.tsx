"use client";

import styled from "styled-components";
import Link from "next/link";
import Input from "../atoms/formInput";
import PrimaryButton from "../atoms/primaryButton";
import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";

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
    <form onSubmit={(e) => handleSubmit(e)}>
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
    </form>
  );
}
