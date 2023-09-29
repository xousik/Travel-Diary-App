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

//  TODO:  Consider if I want to log in with credentialls or email, if emaill i don't need that bellow

// const ForgotPasswordLink = styled(Link)`
//   color: ${({ theme }) => theme.colors.darkGrey};
//   font-size: ${({ theme }) => theme.fontSize.s};
//   font-weight: ${({ theme }) => theme.fontWeight.semiBold};
//   text-decoration: none;
// `;

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    signIn("email", { email, callbackUrl: "http://localhost:3000/logedin" });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
      <Input
        name="E-mail"
        inputType="email"
        value={email}
        onChange={(e) => handleChange(e)}
      />
      <InnerWrapper>
        <RegisterLink href="/register">Register</RegisterLink>
        <PrimaryButton type="submit">Sign In</PrimaryButton>
      </InnerWrapper>
    </form>
  );
}
