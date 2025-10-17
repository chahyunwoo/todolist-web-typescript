interface IProps {
	children?: React.ReactNode;
}

function InitialText({ children }: IProps) {
	return <div className="justify-center opacity-50 leading-[1.6] font-thin text-sm text-center mt-4 text-white">{children}</div>;
}

export default InitialText;
