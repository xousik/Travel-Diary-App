import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9;
`;

export const Input = styled.input`
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

export const StyledTextarea = styled.textarea`
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

export const InnerWrapper = styled.div`
  display: flex;
  column-gap: 6rem;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 5rem 0;
`;

export const ImageInputContainer = styled.div`
  position: relative;
  display: flex;
  column-gap: 6rem;
  align-items: center;
  justify-content: center;
`;

export const ImageInputLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ChooseIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const AddImageBox = styled.div<{ $isimageboxactive?: number }>`
  display: ${({ $isimageboxactive }) => ($isimageboxactive ? "flex" : "none")};
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
