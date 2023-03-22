import styled, { css } from 'styled-components';

interface ContainerProps {
	component: string;
	background?: string;
}

const commonStyles = css`
	display: flex;
	color: #fff;
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 5px;
`;

const welcomeStyles = css`
	width: 100%;
	padding: 1.25rem;
	align-items: center;
	justify-content: space-between;
	height: 10vh;

	@media screen and (max-width: 1280px) {
		justify-content: flex-start;
		flex-wrap: wrap;
		height: auto;
	}
`;

const chatGPTStyles = css`
	margin-top: 2.5rem;
	height: calc(100% - 25vh - 2.5rem);
	overflow: hidden;
	flex-direction: column;
	position: relative;

	@media screen and (max-width: 1280px) {
		height: auto;
	}
`;

const infoStyles = css`
	padding: 1.25rem;
	flex-wrap: wrap;
	position: relative;
	width: 100%;
	height: 25vh;

	@media screen and (max-width: 1280px) {
		height: auto;
	}
`;

const todoStyles = css`
	width: 25%;
	flex-direction: column;
	height: 100%;

	@media screen and (max-width: 1280px) {
		width: 100%;
	}
`;

export const Container = styled.section.attrs<ContainerProps>((props) => ({
	style: {
		background: props.background,
	},
}))<ContainerProps>`
	${commonStyles}

	${({ component }) => {
		if (component === 'welcome') {
			return welcomeStyles;
		} else if (component === 'chatGPT') {
			return chatGPTStyles;
		} else if (component === 'info') {
			return infoStyles;
		} else if (component === 'todo') {
			return todoStyles;
		}
	}}
`;
