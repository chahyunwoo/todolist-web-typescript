export interface ILayoutType {
	children?: React.ReactNode;
}

export interface IComponentLayoutType extends ILayoutType {
	component: string;
}
