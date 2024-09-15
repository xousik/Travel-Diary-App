"use client";

import { FormEvent, useState, useRef, useContext } from "react";
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
import { SetStateAction } from "react";
import { BackgroundImageStateContext } from "@/src/context/backgroundImageStateContext";

export default function CreateNewDiaryForm({
  handleRefresh,
}: {
  handleRefresh: () => void;
}) {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isIconBoxActive, setIsIconBoxActive] = useState<boolean>(false);
  const [isImageBoxActive, setIsImageBoxActive] = useState<boolean>(false);
  const [choosenIcon, setChoosenIcon] = useState<string>("mountain");

  const {
    setIsActive,
  }: {
    setIsActive?: React.Dispatch<SetStateAction<boolean>>;
  } = useContext(BackgroundImageStateContext);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileType: string = file.type;
      if (fileType.startsWith("image/")) {
        // You can use FileReader to read the image and convert it to a data URL
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImages([...selectedImages, reader.result as string]);
          setIsImageBoxActive(false);
        };
        reader.readAsDataURL(file);
      } else {
        alert("File is not an image");
      }
    }
  };

  const handleIconSelect = (icon: string) => {
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

    const submitData = {
      title: titleInputRef.current?.value,
      description: descriptionInputRef.current?.value,
      date: dateInputRef.current?.value,
      choosenIcon,
      selectedImages,
    };

    try {
      await fetch("http://localhost:3000/api/diary", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });

      setIsActive!(false);
      titleInputRef.current!.value = "";
      descriptionInputRef.current!.value = "";
      dateInputRef.current!.value = "";
      setIsImageBoxActive(false);
      setIsIconBoxActive(false);
      setChoosenIcon("mountain");
      setSelectedImages([]);
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
        ref={titleInputRef}
      />
      <StyledTextarea placeholder="Description" ref={descriptionInputRef} />
      <Input name="date" type="date" ref={dateInputRef} />
      <InnerWrapper>
        <ImageInputContainer>
          {/* AddImageBox should be drag and drop area and Image should has on click function that will triger image upload */}
          <AddImageBox
            onClick={() => fileInputRef.current?.click()}
            $isimageboxactive={isImageBoxActive ? 1 : 0}
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
            setIsIconBoxActive={setIsIconBoxActive}
          />
        </ChooseIconWrapper>
      </InnerWrapper>
      <PrimaryButton type="submit" isActive={false}>
        Add diary
      </PrimaryButton>
    </StyledForm>
  );
}
