import Layout from '../components/Layout';
import ToDo from '../components/ToDo';
import Welcome from '../components/Welcome';

const Main: React.FC = () => {
	return (
		<Layout>
			<Welcome />
			<ToDo />
		</Layout>
	);
};

export default Main;
