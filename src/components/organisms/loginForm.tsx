"use client";

import styled from "styled-components";
import Link from "next/link";
import Input from "../atoms/formInput";
import PrimaryButton from "../atoms/primaryButton";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

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
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    signIn("email", {
      email,
      callbackUrl: "http://localhost:3000/logedin",
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        name="E-mail"
        inputType="email"
        value={email}
        onChange={(e) => handleChange(e)}
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
