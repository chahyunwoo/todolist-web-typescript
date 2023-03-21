import { useRef, useEffect, useState } from 'react';
import { fetchChatResponse } from '../api/chatGPT';
import * as S from '../styles/components/ChatGPTStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTransition } from 'react-spring';

const ChatGPT: React.FC = () => {
	const [messages, setMessages] = useState<
		{ content: string; sender: 'user' | 'ai' }[]
	>([]);
	const [userInput, setUserInput] = useState('');
	const [isTyping, setIsTyping] = useState(false);

	const chatContentRef = useRef<HTMLUListElement>(null);

	const scrollToLatestMessage = () => {
		if (chatContentRef.current) {
			chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
		}
	};

	useEffect(() => {
		scrollToLatestMessage();
	}, [messages]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!userInput.trim()) return;

		setMessages((prev) => [...prev, { content: userInput, sender: 'user' }]);
		setUserInput('');

		setIsTyping(true);

		const prompt = `Human: ${userInput}\nAI`;
		const aiResponse = await fetchChatResponse(prompt);

		setIsTyping(false);

		setMessages((prev) => [...prev, { content: aiResponse, sender: 'ai' }]);
	};

	const messageTransitions = useTransition(messages, {
		from: { opacity: 0, transform: 'translateY(20px)' },
		enter: { opacity: 1, transform: 'translateY(0px)' },
		trail: 200,
		config: {
			tension: 180,
			friction: 24,
		},
	});

	return (
		<S.ChatGPTBox>
			<S.ChatContent ref={chatContentRef}>
				{messages.length === 0 ? (
					<S.Initial>
						<p>
							AI와 대화해 보세요. <br />
							AI는 한국말이 미숙하며, 영어에 능숙합니다.
						</p>
					</S.Initial>
				) : (
					messageTransitions((style, message, _, index) => (
						<S.ChatMessage sender={message.sender} style={style}>
							<span style={{ lineHeight: '1.4' }}>{message.content}</span>
						</S.ChatMessage>
					))
				)}

				{isTyping && (
					<S.TypingIndicator>
						AI가 메세지를 입력 중입니다
						<span>.</span>
						<span>.</span>
						<span>.</span>
					</S.TypingIndicator>
				)}
			</S.ChatContent>
			<S.ChatInputForm onSubmit={handleSubmit}>
				<input
					type='text'
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					placeholder='메세지를 입력하세요.'
				/>
				<button type='submit'>
					<FontAwesomeIcon icon={faPaperPlane} />
				</button>
			</S.ChatInputForm>
		</S.ChatGPTBox>
	);
};

export default ChatGPT;
