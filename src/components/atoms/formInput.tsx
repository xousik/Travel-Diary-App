"use client";

import styled from "styled-components";
import userSvg from "@/public/user.svg";
import passwordSvg from "@/public/password.svg";
import Image from "next/image";
import { forwardRef } from "react";

const Wrapper = styled.div`
  width: 30rem;
  height: 5rem;
  position: relative;
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    width: 100%;
    height: 3.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Input = styled.input`
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 1rem;
  border: 0.15rem solid ${({ theme }) => theme.colours.darkGrey};
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding-left: 3.5rem;
  color: ${({ theme }) => theme.colours.brown};
  text-align: center;
  padding-right: 3.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colours.lightGrey};
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
    -webkit-text-fill-color: ${({ theme }) => theme.colours.brown} !important;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }

  @media (max-width: 576px) {
    border: none;
    box-shadow: inset 0px 0px 5px 1px rgba(66, 68, 90, 1);
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    padding-right: 2rem;

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

const Svg = styled(Image)`
  width: 3rem;
  height: 3rem;
  position: absolute;
  height: inherit;
  padding-left: 0.7rem;

  @media (max-width: 576px) {
    width: 2.5rem;
    height: 2.5rem;
    height: inherit;
  }
`;

function chooseIcon(inputType: string) {
  if (inputType === "email") {
    return userSvg;
  } else if (inputType === "password") {
    return passwordSvg;
  }
  return userSvg;
}

function chooseInputType(inputType: string) {
  if (inputType === "email") {
    return "email";
  } else if (inputType === "password") {
    return "password";
  }
}

type FormInputProps = {
  name: string;
  inputType: string;
  hasIcon?: boolean;
};

const FormInput = forwardRef(function FormInput(
  { name, inputType, hasIcon }: FormInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const iconType = () => chooseIcon(inputType);
  const type = () => chooseInputType(inputType);
  return (
    <Wrapper>
      <Input
        type={type()}
        name={name.toLowerCase()}
        placeholder={name}
        ref={ref}
      />
      {hasIcon && <Svg src={iconType()} alt="input icon" />}
      <label htmlFor={name.toLowerCase()} />
    </Wrapper>
  );
});

export default FormInput;
