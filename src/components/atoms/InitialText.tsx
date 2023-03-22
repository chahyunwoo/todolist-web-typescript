import * as S from './InitialText.styles';

interface IProps {
	children?: React.ReactNode;
}

function InitialText({ children }: IProps) {
	return <S.Initial>{children}</S.Initial>;
}

export default InitialText;
