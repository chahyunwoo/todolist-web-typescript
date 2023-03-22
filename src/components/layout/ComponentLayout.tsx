import * as S from './ComponentLayout.styles';

import { IComponentLayout } from '../../types/layoutTypes';

function ComponentLayout(props: IComponentLayout) {
	const { component, children } = props;

	return <S.Container component={component}>{children}</S.Container>;
}

export default ComponentLayout;
