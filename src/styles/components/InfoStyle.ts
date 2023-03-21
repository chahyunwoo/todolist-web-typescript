import styled from "styled-components";
import tw from "twin.macro";

export const InfoBox = styled.article`
  ${tw`
      text-white
      p-5
      flex
      flex-wrap
      relative
  `}
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  border-radius: 5px;
  height: 25vh;

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 1280px) {
    height: auto;
  }
`;

export const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  div {
    width: 15%;
    height: auto;
    margin: 0 auto;
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1280px) {
    width: 100%;

    p {
      font-size: 13px;
    }

    div {
      width: 80px;
      margin-bottom: 20px;
    }
  }
`;

export const RightBox = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 100px;

  li {
    width: 100%;
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
    padding-left: 0;

    li {
      margin-bottom: 10px;
      text-align: center;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;
