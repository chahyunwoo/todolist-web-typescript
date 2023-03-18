import * as S from '../styles/components/LayoutStyle';

interface IProps {
	children?: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
	return <S.Section>{props.children}</S.Section>;
};

export default Layout;
