import styled from "styled-components";
import tw from "twin.macro";

export const SectionWrap = styled.div`
  ${tw`
      w-full
      flex
      flex-wrap
      mt-10
  `}
  height: calc(100vh - 10vh - 7.5rem);

  @media screen and (max-width: 1280px) {
    height: auto;
    margin-top: 30px;
    display: block;
  }
`;

export const LeftSection = styled.section`
  ${tw`
      w-1/4
			flex
  `}
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const RightSection = styled.section`
  ${tw`
      ml-10
  `}
  width: calc(75% - 2.5rem);
  border-radius: 5px;
  height: 100%;

  @media screen and (max-width: 1280px) {
    width: 100%;
    margin: 30px 0 0;
  }
`;
