import styled from "styled-components";
import Image from "next/image";

export const ModalOverlay = styled.div`
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

export const Modal = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
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
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    padding: 1rem;
    text-align: center;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  position: absolute;
  padding: 0;
  background: transparent;
  border: none;
  right: 2rem;
  top: 1.5rem;
`;

export const Wrapper = styled.div`
  height: max-content;
  width: 100%;

  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide-active {
    scale: 1.2;
  }
  .swiper-pagination {
    position: relative !important;
    margin-top: 4rem;
    width: auto;
    height: auto;
    &-bullet {
      cursor: pointer;
      width: 1rem;
      height: 1rem;
      display: inline-block;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.darkBeige};
      opacity: 0.2;
      border: 1px solid ${({ theme }) => theme.colors.darkBeige};
      margin: 0 5px;
      box-shadow: none;
      transform: scale(0.8);
      &:hover,
      &-active {
        background-color: ${({ theme }) => theme.colors.darkBeige};
        border-color: ${({ theme }) => theme.colors.darkBeige};
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 20px;
`;
