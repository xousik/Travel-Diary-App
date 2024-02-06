import { DiaryDetailsModalContext } from "@/src/context/diaryDetailsModalContext";
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import closeSvg from "@/public/close.svg";
import Image from "next/image";
import { ModalOverlay, Modal, StyledButton } from "./diaryDetailsModal.styles";

export type DiaryDetailsModalContextProps = {
  setActiveTravelCardInfo?: Dispatch<
    SetStateAction<{
      title: string;
      description: string;
    }>
  >;
  activeTravelCardInfo?: { title: string; description: string };
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  isModalOpen?: boolean;
};

export default function DiaryDetailsModal() {
  const {
    activeTravelCardInfo,
    setIsModalOpen,
    isModalOpen,
  }: DiaryDetailsModalContextProps = useContext(DiaryDetailsModalContext);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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
  }, []);

  if (!isModalOpen) return null;

  return (
    <ModalOverlay onClick={() => setIsModalOpen!((prev: boolean) => !prev)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <StyledButton onClick={() => setIsModalOpen!((prev) => !prev)}>
          <Image src={closeSvg} alt="close icon" width={45} height={45} />
        </StyledButton>
        <h3>{activeTravelCardInfo!.title}</h3>
        <p>{activeTravelCardInfo!.description}</p>
        <div>carousele with images</div>
      </Modal>
    </ModalOverlay>
  );
}
