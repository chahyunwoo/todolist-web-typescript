import ChatGPT from '../components/containers/ChatGPT';
import Info from '../components/containers/Info';
import MainLayout from '../components/layout/MainLayout';
import ToDo from '../components/containers/ToDo';
import Welcome from '../components/containers/Welcome';

const Main: React.FC = () => {
	return (
		<MainLayout>
			<Welcome />
			<div className="w-full flex flex-wrap mt-10 mobile:mt-[30px] mobile:block mobile:h-auto" style={{ height: 'calc(100vh - 10vh - 7.5rem)' }}>
				<ToDo />
				<section className="ml-10 rounded-[5px] h-full mobile:w-full mobile:m-[30px_0_0]" style={{ width: 'calc(75% - 2.5rem)' }}>
					<Info />
					<ChatGPT />
				</section>
			</div>
		</MainLayout>
	);
};

export default Main;
