import ChatGPT from '../components/containers/ChatGPT';
import Info from '../components/containers/Info';
import MainLayout from '../components/layout/MainLayout';
import ToDo from '../components/containers/ToDo';
import Welcome from '../components/containers/Welcome';

import * as S from './Main.styles';

const Main: React.FC = () => {
	return (
		<MainLayout>
			<Welcome />
			<S.SectionWrap>
				<ToDo />
				<S.RightSection>
					<Info />
					<ChatGPT />
				</S.RightSection>
			</S.SectionWrap>
		</MainLayout>
	);
};

export default Main;
