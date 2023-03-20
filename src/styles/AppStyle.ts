import styled from "styled-components";
import tw from "twin.macro";

export const Background = styled.section`
  ${tw`
		w-full
		h-screen
		relative
		overflow-hidden
`}

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1280px) {
    overflow: auto;
    background-color: black;

    &::after {
      display: none;
    }
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
