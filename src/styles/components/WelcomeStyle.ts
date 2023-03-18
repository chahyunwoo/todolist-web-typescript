import styled from 'styled-components';
import tw from 'twin.macro';

export const TitleBox = styled.article`
	${tw`
      w-full
      text-white
      p-5
      flex
      items-center
      mb-10
  `}
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 5px;
	justify-content: space-between;
`;

export const LeftBox = styled.div`
	${tw`
  `}
`;

export const RightBox = styled.div`
	${tw`
  `}
`;

export const P = styled.p`
	${tw`
      mb-2
      text-lg
  `}
`;

export const Button = styled.button`
	${tw`
      text-xs
      text-sky-500
      tracking-wider
  `}
`;

export const Time = styled.p`
	${tw`
      text-sm
  `}
`;
