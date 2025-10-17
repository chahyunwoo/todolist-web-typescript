import React from 'react';

interface IProps {
	size: number;
	left: number;
	top: number;
	duration: number;
}

const TwinklingStar: React.FC<IProps> = ({ size, left, top, duration }) => {
	return (
		<div
			className="hidden mobile:block fixed bg-white opacity-0 rounded-full animate-twinkling"
			style={{
				top: `${top}%`,
				left: `${left}%`,
				width: `${size}px`,
				height: `${size}px`,
				// @ts-ignore - CSS custom property
				'--duration': `${duration}s`,
			}}
		/>
	);
};

export default TwinklingStar;
