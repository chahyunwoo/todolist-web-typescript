import { animated } from 'react-spring';
import styled from 'styled-components';

export const ChatContent = styled.ul`
	height: calc(100% - 40px);
	overflow-y: auto;
	padding: 16px;
	display: flex;
	flex-direction: column;

	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(255, 255, 255, 0.1);
	}

	@media screen and (max-width: 1280px) {
		height: 400px;
	}
`;

export const ChatMessage = styled(animated.li)<{ sender: 'user' | 'ai' }>`
	color: ${({ sender }) => (sender === 'user' ? '#ffffff' : '#44bd32')};
	border-radius: 8px;
	padding: 8px 16px;
	margin-bottom: 8px;
	max-width: 50%;
	word-break: break-word;
	overflow-wrap: break-word;
	border: 1px solid rgba(255, 255, 255, 0.2);

	${({ sender }) =>
		sender === 'user'
			? 'align-self: flex-end; margin-left: 16px;'
			: 'align-self: flex-start; margin-right: 16px;'}

	@media screen and (max-width: 1280px) {
		max-width: 80%;
	}
`;

export const TypingIndicator = styled.div`
	position: absolute;
	bottom: 50px;
	left: 16px;
	font-size: 12px;
	color: rgba(255, 255, 255, 0.7);
	letter-spacing: 2px;

	span {
		display: inline-block;
		animation: typingAnimation 1s infinite;

		@keyframes typingAnimation {
			0% {
				opacity: 0;
			}
			50% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}

		span:nth-child(2) {
			animation-delay: 0.5s;
		}

		span:nth-child(3) {
			animation-delay: 1s;
		}
	}
`;

export const ChatInputForm = styled.form`
	display: flex;
	width: 100%;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	height: 40px;
	margin-top: auto;

	input {
		appearance: none;
		background-color: transparent;
		outline: none;
		color: #fff;
		cursor: pointer;
		flex: 1;
		padding: 8px 12px;
		width: calc(100% - 50px);

		&:focus {
			&::placeholder {
				opacity: 0;
				visibility: hidden;
			}
		}

		&::placeholder {
			opacity: 1;
			visibility: visible;
			transition: 0.5s;
		}
	}

	button {
		padding: 8px 12px;
		background-color: transparent;
		border-left: 1px solid rgba(255, 255, 255, 0.5);
		width: 50px;
		cursor: pointer;
	}
`;
