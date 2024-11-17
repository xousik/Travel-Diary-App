"use client";

import styled from "styled-components";
import Input from "../atoms/formInput";
import Link from "next/link";
import PrimaryButton from "../atoms/primaryButton";
import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

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

const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.colours.darkBeige};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
`;

export default function RegisterForm() {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const submitData = {
      name: nameInputRef.current?.value,
      email: emailInputRef.current?.value,
    };

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status === 200) {
        signIn("email", {
          email: emailInputRef.current?.value,
          callbackUrl: "/logedin",
        });
      } else if (res.status === 409) {
        alert("The user already exists, You can log in.");
        setTimeout(() => router.push("/"), 1000);
      }
    } catch (error) {
      // TODO: How to properly handle errors ?
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={(e: FormEvent) => handleSubmit(e)}>
      <Input
        name="E-mail"
        inputType="email"
        hasIcon={true}
        ref={emailInputRef}
      />
      <Input name="Name" inputType="name" hasIcon={true} ref={nameInputRef} />
      <InnerWrapper>
        <LoginLink href="/">Log In</LoginLink>
        <PrimaryButton type="submit" isActive={false}>
          Sign Up
        </PrimaryButton>
      </InnerWrapper>
    </StyledForm>
  );
}
