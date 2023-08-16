"use client";

import Input from "../atoms/formInput";
import styled from "styled-components";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import PrimaryButton from "../atoms/primaryButton";

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

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    signIn();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="E-mail"
        inputType="email"
        value={email}
        onChange={(e) => handleChange(e)}
      />
      <InnerWrapper>
        <RegisterLink href="/register">Register</RegisterLink>
        <ForgotPasswordLink href="">Forgot Password</ForgotPasswordLink>
        <PrimaryButton type="submit">Sign In</PrimaryButton>
      </InnerWrapper>
    </form>
  );
}
