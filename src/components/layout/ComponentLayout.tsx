import * as S from './ComponentLayout.styles';

import { IComponentLayoutType } from '../../types/layoutTypes';

function ComponentLayout(props: IComponentLayoutType) {
	const { component, children } = props;

	return <S.Container component={component}>{children}</S.Container>;
}

export default ComponentLayout;
