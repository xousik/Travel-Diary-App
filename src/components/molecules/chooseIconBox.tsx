"use client";

import styled from "styled-components";
import Image from "next/image";
import mountainSvg from "@/public/mountain.svg";
import palmTreeSvg from "@/public/palmTree.svg";
import yachtSvg from "@/public/yacht.svg";
import planeSvg from "@/public/plane.svg";
import { SetStateAction } from "react";

const Wrapper = styled.div<{
  $isiconboxactive?: number;
}>`
  display: ${({ $isiconboxactive }) => ($isiconboxactive ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  position: absolute;
  width: 13rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: inset 0px 0px 10px 0px #a78453;
  border-radius: 20px;
  right: -15rem;
  top: -2rem;
`;

type ChooseIconBoxProps = {
  isIconBoxActive: boolean;
  onIconSelect: (icon: string) => void;
  setIsIconBoxActive: React.Dispatch<SetStateAction<boolean>>;
};

// Left it like this or change to export default

export const ChooseIconBox = ({
  isIconBoxActive,
  onIconSelect,
  setIsIconBoxActive,
}: ChooseIconBoxProps) => {
  const handleIconSelect = (icon: string) => {
    onIconSelect(icon);
    setIsIconBoxActive(false);
  };

  return (
    <Wrapper $isiconboxactive={isIconBoxActive ? 1 : 0}>
      <Image
        src={palmTreeSvg}
        alt="palm tree icon"
        width={45}
        height={45}
        onClick={() => handleIconSelect("palmTree")}
      />
      <Image
        src={yachtSvg}
        alt="yacht icon"
        width={45}
        height={45}
        onClick={() => handleIconSelect("yacht")}
      />
      <Image
        src={planeSvg}
        alt="plane icon"
        width={45}
        height={45}
        onClick={() => handleIconSelect("plane")}
      />
      <Image
        src={mountainSvg}
        alt="mountain icon"
        width={45}
        height={45}
        onClick={() => handleIconSelect("mountain")}
      />
    </Wrapper>
  );
};
