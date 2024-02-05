import { DiaryDetailsModalContext } from "@/src/context/diaryDetailsModalContext";
import React, { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.background};
  width: 85%;
  height: 90%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.brown};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  div {
    border: 1px solid black;
    height: 60%;
    width: 90%;
    font-size: 20px;
    text-align: center;
  }
`;

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
    setActiveTravelCardInfo,
    activeTravelCardInfo,
    setIsModalOpen,
    isModalOpen,
  }: DiaryDetailsModalContextProps = useContext(DiaryDetailsModalContext);

  if (!isModalOpen) return null;

  return (
    <ModalOverlay onClick={() => setIsModalOpen!((prev: boolean) => !prev)}>
      <Modal>
        <h3>{activeTravelCardInfo!.title}</h3>
        <p>{activeTravelCardInfo!.description}</p>
        <div>carousele with images</div>
      </Modal>
    </ModalOverlay>
  );
}
