import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "@material-tailwind/react";

interface ISpanProps {
  done: boolean;
}

export const InputBox = styled.div`
  ${tw`
			p-5
	`}
  display: flex;
  height: 75px;
`;

export const Input = styled.input`
  ${tw`
      appearance-none
      bg-transparent
      py-2
      px-2
      leading-tight
      focus:outline-none
      border-b-white
      border-b
      cursor-pointer
      tracking-wide
			text-white
  `}
  width: 100%;

  &:focus {
    &::placeholder {
      opacity: 0;
      visibility: hidden;
    }
  }

  &::placeholder {
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
  }
`;

export const AddButton = styled(Button)`
  ${tw`
      py-2
  `}
  border-radius: 2px;
  margin-left: 10px;
  width: 40px;
`;

export const ListBox = styled.ul`
  ${tw`
      w-full
			px-5
  `}
  display: block;
  overflow-y: auto;
  height: calc(100% - 115px);

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-button {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media screen and (max-width: 1280px) {
    min-height: 400px;
    overflow: unset;
  }
`;

export const Initial = styled.div`
  justify-content: center;
  opacity: 0.5;
  line-height: 1.6;
  font-weight: 100;
  font-size: 14px;
  text-align: center;
  margin-top: 1rem;
  color: #fff;
`;

export const List = styled.li`
  ${tw`
      w-full
      px-2
      py-4
      flex
  `}
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  justify-content: space-between;

  &:last-of-type {
    border: none;
  }
`;

export const Span = styled.span<ISpanProps>`
  max-width: 90%;
  word-break: break-word;
  line-height: 1.4;
  color: ${({ done }) => (done ? "#4cd137" : "#fff")};
  cursor: pointer;
  transition: color 0.35s;
`;

export const deleteAllButtonWrap = styled.div`
  ${tw`
      w-full
  `}
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-top: auto;
  height: 40px;
  line-height: 40px;
`;

export const DeleteAllButton = styled.button`
  cursor: pointer;
  transition: 0.5s;
  color: white;

  &:hover {
    color: crimson;
  }
`;
