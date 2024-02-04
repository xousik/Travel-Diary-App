"use client";

import { FormEvent, useState, useRef } from "react";
import styled from "styled-components";
import PrimaryButton from "../atoms/primaryButton";
import addImg from "@/public/addImg.svg";
import Image from "next/image";
import mountainSvg from "@/public/mountain.svg";
import palmTreeSvg from "@/public/palmTree.svg";
import yachtSvg from "@/public/yacht.svg";
import planeSvg from "@/public/plane.svg";
import plusSvg from "@/public/plus.svg";
import { ChooseIconBox } from "../molecules/chooseIconBox";

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9;
`;

const Input = styled.input`
  height: 4rem;
  width: 70%;
  margin-top: 1rem;
  border: 0.15rem solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 1rem;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.brown};
  text-align: center;

  &:nth-child(3) {
    width: 14rem;
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
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
  width: 85%;
  height: 35%;
  margin-top: 2rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  column-gap: 6rem;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 5rem 0;
`;

const ImageInputContainer = styled.div`
  position: relative;
  display: flex;
  column-gap: 6rem;
  align-items: center;
  justify-content: center;
`;

const ImageInputLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageInput = styled.input`
  display: none;
`;

const ChooseIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

const AddImageBox = styled.div<{ isimageboxactive?: number }>`
  display: ${({ isimageboxactive }) => (isimageboxactive ? "flex" : "none")};
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: inset 0px 0px 10px 0px #a78453;
  border-radius: 20px;
  left: -15rem;
  top: -2rem;
  cursor: pointer;
`;

export default function CreateNewDiaryForm({
  handleRefresh,
}: {
  handleRefresh: () => void;
}) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isIconBoxActive, setIsIconBoxActive] = useState<boolean>(false);
  const [isImageBoxActive, setIsImageBoxActive] = useState<boolean>(false);
  const [choosenIcon, setChoosenIcon] = useState<string | null>(null);

  console.log(selectedImage);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // You can use FileReader to read the image and convert it to a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconSelect = (icon: string) => {
    // setChoosenIcon(icon);
    switch (icon) {
      case "mountain":
        return mountainSvg;
      case "palmTree":
        return palmTreeSvg;
      case "plane":
        return planeSvg;
      case "yacht":
        return yachtSvg;
      default:
        return mountainSvg;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const submitData = { title, description, date, choosenIcon };

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
      handleRefresh();

      // TODO: Add some cool pop out box info " Correctly added new Diary! "
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
        onChange={(e) => handleTitleChange(e)}
      />
      <StyledTextarea
        value={description}
        onChange={(e) => handleDescriptionChange(e)}
        placeholder="Description"
      />
      <Input
        name="date"
        type="date"
        value={date}
        onChange={(e) => handleDateChange(e)}
      />
      <InnerWrapper>
        <ImageInputContainer>
          {/* AddImageBox should be drag and drop area and Image should has on click function that will triger image upload */}
          <AddImageBox
            onClick={() => fileInputRef.current?.click()}
            isimageboxactive={isImageBoxActive ? 1 : 0}
          >
            <Image src={plusSvg} alt="plus icon" height={65} width={65} />
          </AddImageBox>
          <ImageInputLabel onClick={() => setIsImageBoxActive((prev) => !prev)}>
            <Image src={addImg} alt="Add image icon" height={65} width={65} />
          </ImageInputLabel>
          <ImageInput
            ref={fileInputRef}
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </ImageInputContainer>
        <ChooseIconWrapper>
          <Image
            onClick={() => setIsIconBoxActive((prev) => !prev)}
            src={handleIconSelect(choosenIcon!)}
            alt="mountain icon"
            width={60}
            height={60}
          />
          <ChooseIconBox
            isIconBoxActive={isIconBoxActive}
            onIconSelect={setChoosenIcon}
          />
        </ChooseIconWrapper>
      </InnerWrapper>
      <PrimaryButton type="submit">Add diary</PrimaryButton>
    </StyledForm>
  );
}
