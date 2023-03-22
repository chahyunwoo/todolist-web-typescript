export interface ILayout {
	children?: React.ReactNode;
}

export interface IComponentLayout extends ILayout {
	component: string;
}
