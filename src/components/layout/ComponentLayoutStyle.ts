import styled from "styled-components";
import tw from "twin.macro";

interface IProps {
  width?: string;
  height?: string;
  padding?: string;
}

export const Container = styled.section<IProps>`
  ${tw`
      text-white
      flex
  `}
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => height && height};
  padding: ${({ padding }) => padding && "padding: 1.25rem"};
`;
