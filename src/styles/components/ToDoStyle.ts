import styled from 'styled-components';
import tw from 'twin.macro';

import { Button } from '@material-tailwind/react';

interface ISpanProps {
	done: boolean;
}

export const ToDoBox = styled.article`
	${tw`
      w-1/4
      text-white
      p-5
      relative
  `}
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 5px;
	min-height: 60vh;
`;

export const Input = styled.input`
	${tw`
      appearance-none
      bg-transparent
      w-3/4
      py-2
      px-2
      leading-tight
      focus:outline-none
      border-b-white
      border-b
      cursor-pointer
      tracking-wide
  `}

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
	margin-left: 5%;
	width: calc(100% - 80%);
`;

export const ListBox = styled.ul`
	${tw`
      w-full
      mt-5
      mb-7
  `}
	display: block;
	overflow: hidden;
	max-height: 60vh;
	overflow-y: auto;

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
	color: ${({ done }) => (done ? '#4cd137' : '#fff')};
	cursor: pointer;
	transition: color 0.35s;
`;

export const deleteAllButtonWrap = styled.div`
	${tw`
      absolute
      py-3
      w-full
  `}
	bottom: 0;
	left: 0;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	text-align: center;
`;

export const DeleteAllButton = styled.span`
	cursor: pointer;
	transition: 0.5s;

	&:hover {
		color: crimson;
	}
`;
