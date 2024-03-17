import { DiaryDetailsModalContext } from "@/src/context/diaryDetailsModalContext";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import closeSvg from "@/public/close.svg";
import Image from "next/image";
import { ModalOverlay, Modal, StyledButton } from "./diaryDetailsModal.styles";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 20px;
  margin: 0 1rem;
`;

export type DiaryDetailsModalContextProps = {
  setActiveTravelCardInfo?: Dispatch<
    SetStateAction<{
      title: string;
      description: string;
      images: string[];
    }>
  >;
  activeTravelCardInfo?: {
    title: string;
    description: string;
    images: string[];
  };
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  isModalOpen?: boolean;
};

export default function DiaryDetailsModal() {
  const {
    activeTravelCardInfo,
    setIsModalOpen,
    isModalOpen,
  }: DiaryDetailsModalContextProps = useContext(DiaryDetailsModalContext);

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const images: string[] = [];
      for (let i = 0; i < activeTravelCardInfo!.images.length; i++) {
        const url =
          "https://res.cloudinary.com/dq0x2a3gj/image/upload/v1707244671/" +
          activeTravelCardInfo!.images[i] +
          ".jpg";
        await fetch(url).then((response) => {
          images.push(response.url);
        });
      }
      setImages(images);
    };
    getImages();

    setImages([]);

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        e.preventDefault();

        setIsModalOpen!((prev) => !prev);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };

    // Line below removes warning about missing dependency: 'setIsModalOpen'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  console.log(images);

  return (
    <ModalOverlay onClick={() => setIsModalOpen!((prev: boolean) => !prev)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <StyledButton onClick={() => setIsModalOpen!((prev) => !prev)}>
          <Image src={closeSvg} alt="close icon" width={45} height={45} />
        </StyledButton>
        <h3>{activeTravelCardInfo!.title}</h3>
        <p>{activeTravelCardInfo!.description}</p>
        <Wrapper>
          {images.map((image) => (
            <StyledImage
              key={image}
              src={image}
              alt="Image"
              width={300}
              height={300}
            />
          ))}
        </Wrapper>
      </Modal>
    </ModalOverlay>
  );
}
