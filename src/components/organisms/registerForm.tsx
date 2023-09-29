"use client";

import Input from "../atoms/formInput";
import styled from "styled-components";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { prisma } from "@/src/lib/prisma";
import PrimaryButton from "../atoms/primaryButton";

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

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  type newUser = {
    data: {
      name: string;
      email: string;
    };
  };

  // Example POST method implementation:
  async function postData(url: string, data: {}) {
    console.log(JSON.stringify(data));
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
  }

  // postData("https://example.com/answer", { answer: 42 }).then((data) => {
  //   console.log(data); // JSON data parsed by `data.json()` call
  // });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log("Signing up");

    const submitData = { name, email };

    // await createUser(email, name);

    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        console.log("Yay!");
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }

    signIn("email", {
      email,
      callbackUrl: "http://localhost:3000/logedin",
    });
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
