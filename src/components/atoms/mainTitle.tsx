import styled from "styled-components";

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.beige};
  text-align: center;
  padding-top: 80px;
  margin-bottom: 3rem;
`;

export default function MainTitle() {
  return <Title>Travel Diary App</Title>;
}
