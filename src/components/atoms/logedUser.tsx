"use client";

import styled from "styled-components";
import Image from "next/image";
import user from "../../../public/user.svg";

const Wrapper = styled.div`
  display: flex;
  padding-right: 1rem;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    column-gap: 0.2rem;
  }
`;

type userName = {
  userName: string;
};

export default function LogedUser({ userName }: userName) {
  return (
    <Wrapper>
      {userName}
      <Image src={user} alt="user iccon" width={30} />
    </Wrapper>
  );
}
