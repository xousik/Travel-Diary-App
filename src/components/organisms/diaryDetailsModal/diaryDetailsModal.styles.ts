import styled from "styled-components";

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

  div {
    height: 60%;
    width: max-content;
    font-size: 20px;
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
