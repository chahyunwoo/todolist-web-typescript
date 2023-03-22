import { useEffect, useRef } from 'react';
import * as S from './MainLayout.styles';

import { ILayoutType } from '../../types/layoutTypes';

const MainLayout: React.FC<ILayoutType> = ({ children }) => {
	const layoutRef = useRef<any>(null);

	useEffect(() => {
		layoutRef.current.classList.remove('on');
		layoutRef.current.classList.add('on');
	});

	return <S.Section ref={layoutRef}>{children}</S.Section>;
};

export default MainLayout;
