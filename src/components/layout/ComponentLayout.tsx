import { IComponentLayout } from '../../types/layoutTypes';

const componentClasses: Record<string, string> = {
	welcome: 'w-full p-5 items-center justify-between h-[10vh] mobile:justify-start mobile:flex-wrap mobile:h-auto',
	chatGPT: 'mt-10 overflow-hidden flex-col relative mobile:h-auto',
	info: 'p-5 flex-wrap relative w-full h-[25vh] mobile:h-auto',
	todo: 'w-1/4 flex-col h-full mobile:w-full',
};

function ComponentLayout(props: IComponentLayout) {
	const { component, children, background } = props;

	const specificClasses = componentClasses[component] || '';
	const heightStyle = component === 'chatGPT' ? { height: 'calc(100% - 25vh - 2.5rem)' } : {};

	return (
		<section
			className={`flex text-white border border-solid border-white/50 rounded-[5px] ${specificClasses}`}
			style={{ background, ...heightStyle }}
		>
			{children}
		</section>
	);
}

export default ComponentLayout;
