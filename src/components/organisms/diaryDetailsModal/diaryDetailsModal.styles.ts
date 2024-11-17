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
  z-index: 9;
  overflow: hidden;
`;

export const Modal = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  width: 85%;
  height: 90%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.brown};

  @media (max-width: 576px) {
    padding: 1rem 0 0.5rem 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2rem;

    @media (max-width: 576px) {
      font-size: ${({ theme }) => theme.fontSize.l};
      width: 82%;
    }
  }

  p {
    width: 60rem;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    padding: 1rem;
    text-align: center;

    @media (max-width: 576px) {
      padding: 0 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.s};
      height: 8rem;
      width: 100%;
      line-height: 2rem;
      overflow: auto;
      align-self: center;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
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

  @media (max-width: 576px) {
    top: 0.5rem;
    right: 0.5rem;
    width: 40px;
    height: 40px;
  }
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

    @media (max-width: 576px) {
      scale: 1.5;
    }
  }

  .swiper-pagination {
    position: relative !important;
    margin-top: 7rem;
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

    @media (max-width: 576px) {
      margin-top: 6rem;
    }
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 20px;

  @media (max-width: 576px) {
    width: 13rem;
    height: 15rem;
  }
`;
