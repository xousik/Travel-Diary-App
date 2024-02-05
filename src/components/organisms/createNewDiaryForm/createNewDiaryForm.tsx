"use client";

import { FormEvent, useState, useRef } from "react";
import PrimaryButton from "../../atoms/primaryButton";
import addImg from "@/public/addImg.svg";
import Image from "next/image";
import mountainSvg from "@/public/mountain.svg";
import palmTreeSvg from "@/public/palmTree.svg";
import yachtSvg from "@/public/yacht.svg";
import planeSvg from "@/public/plane.svg";
import plusSvg from "@/public/plus.svg";
import { ChooseIconBox } from "../../molecules/chooseIconBox";
import {
  StyledForm,
  Input,
  StyledTextarea,
  InnerWrapper,
  ImageInputContainer,
  ImageInputLabel,
  ImageInput,
  ChooseIconWrapper,
  AddImageBox,
} from "./createNewDiaryForm.styles";

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
  const [choosenIcon, setChoosenIcon] = useState<string | null>("mountain");

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
