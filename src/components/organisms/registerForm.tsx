"use client";

import Input from "../atoms/formInput";
import styled from "styled-components";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import PrimaryButton from "../atoms/primaryButton";
import { useRouter } from "next/navigation";
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.colors.beige};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
`;

export default function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log("Signing up");

    const submitData = { name, email };

    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status === 200) {
        signIn("email", {
          email,
          callbackUrl: "http://localhost:3000/logedin",
        });
      } else if (res.status === 409) {
        console.log("The user already exists");
        alert("The user already exists, You can log in.");
        setTimeout(() => router.push("/"), 1000);
      }
    } catch (error) {
      // TODO: How to properly handle errors ?
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
      <Input
        name="E-mail"
        inputType="email"
        value={email}
        onChange={(e) => handleEmailChange(e)}
      />
      <Input
        name="Name"
        inputType="name"
        value={name}
        onChange={(e) => handleNameChange(e)}
      />
      <InnerWrapper>
        <LoginLink href="/">Log In</LoginLink>
        <PrimaryButton type="submit">Sign Up</PrimaryButton>
      </InnerWrapper>
    </form>
  );
}
