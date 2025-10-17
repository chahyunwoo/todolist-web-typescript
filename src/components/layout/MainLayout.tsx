import { useEffect, useRef } from 'react';

import { ILayout } from '../../types/layoutTypes';

const MainLayout: React.FC<ILayout> = ({ children }) => {
	const layoutRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (layoutRef.current) {
			layoutRef.current.classList.remove('on');
			layoutRef.current.classList.add('on');
		}
	});

	return (
		<section
			ref={layoutRef}
			className="p-10 flex flex-wrap relative z-[9] w-[90%] mx-auto my-0 opacity-0 translate-y-[50px] transition-all duration-1000 [&.on]:opacity-100 [&.on]:translate-y-0 mobile:w-full mobile:p-[30px_20px] mobile:block mobile:top-0 mobile:left-0 mobile:transform-none"
		>
			{children}
		</section>
	);
};

export default MainLayout;
