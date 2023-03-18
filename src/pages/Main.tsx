import Info from '../components/Info';
import Layout from '../components/Layout';
import ToDo from '../components/ToDo';
import Welcome from '../components/Welcome';

const Main: React.FC = () => {
	return (
		<Layout>
			<Welcome />
			<ToDo />
			<Info />
		</Layout>
	);
};

export default Main;
