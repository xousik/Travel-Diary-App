"use client";

import { FormEvent, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../atoms/primaryButton";
import { stringify } from "querystring";

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  /* display: flex; */
  justify-content: space-around;
  z-index: 9;
`;

const Input = styled.input`
  height: 4rem;
  width: 80%;
  margin-top: 2rem;
  border: 0.15rem solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 1rem;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.brown};
  text-align: center;

  &:first-child {
    /* width: 17rem; */
  }
`;

const StyledTextarea = styled.textarea`
  border: 0.15rem solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 1rem;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.brown};
  text-align: center;
  width: 90%;
  height: 60%;
  margin-top: 2rem;
`;

export default function CreateNewDiaryForm() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const submitData = { title, description };

    try {
      await fetch("http://localhost:3000/api/diary", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });

      setTitle("");
      setDescription("");

      // TODO: Redo it on some cool pop out box info
      alert("Pomyślnie dodano wspomnienie :)");
    } catch (error) {
      // TODO: How to properly handle errors ?
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <Input
        name="Title"
        type="title"
        placeholder="Title"
        value={title}
        onChange={(e) => handleChange(e)}
      />
      {/* <Input
        name="date"
        type="date"
        value=""
        // onChange={(e) => handleChange(e)}
      /> */}
      <StyledTextarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <PrimaryButton type="submit">Add diary</PrimaryButton>
    </StyledForm>
  );
}
