import styled from "styled-components";
import userSvg from "@/public/user.svg";
import passwordSvg from "@/public/password.svg";
import Image from "next/image";

type FormInputProps = {
  name: string;
  inputType: string;
};

const Wrapper = styled.div`
  width: 30rem;
  height: 5rem;
  position: relative;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 1rem;
  border: 0.15rem solid ${({ theme }) => theme.colors.darkGrey};
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding-left: 3.5rem;
  color: ${({ theme }) => theme.colors.brown};
  text-align: center;
  padding-right: 3.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: start;
    transition: opacity;
    transition-duration: 0.2s;
    transition-timing-function: linear;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 40px white inset !important;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.brown} !important;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`;

const StyledSvg = styled(Image)`
  width: 3rem;
  height: 3rem;
  position: absolute;
  height: inherit;
  padding-left: 0.7rem;
`;

function chooseIcon(inputType: string) {
  if (inputType === "email") {
    return userSvg;
  } else if (inputType === "password") {
    return passwordSvg;
  }
}

function chooseInputType(inputType: string) {
  if (inputType === "email") {
    return "email";
  } else if (inputType === "password") {
    return "password";
  }
}

export default function FormInput({ name, inputType }: FormInputProps) {
  const iconType = () => chooseIcon(inputType);
  const type = () => chooseInputType(inputType);
  return (
    <Wrapper>
      <StyledInput type={type()} name={name.toLowerCase()} placeholder={name} />
      <StyledSvg src={iconType()} alt="input_icon" />
      <label htmlFor={name.toLowerCase()}>{name}</label>
    </Wrapper>
  );
}
