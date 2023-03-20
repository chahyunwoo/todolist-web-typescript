import styled from "styled-components";
import tw from "twin.macro";

export const DrawingCanvasBox = styled.article`
  ${tw`
			text-white
      mt-10
			p-5
			relative
  `}
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  border-radius: 5px;
  height: calc(100% - 25vh - 2.5rem);
  overflow: hidden;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 1280px) {
    height: auto;
  }
`;
