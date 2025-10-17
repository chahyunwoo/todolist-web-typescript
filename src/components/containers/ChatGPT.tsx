import { useRef, useEffect, useState, memo, useCallback } from 'react';
import { fetchChatResponse } from '../../api/chatGPT';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';

import ComponentLayout from '../layout/ComponentLayout';
import InitialText from '../atoms/InitialText';

const ChatMessage = memo(({ sender, style, content }: { sender: 'user' | 'ai'; style: any; content: string }) => {
	const AnimatedLi = animated('li');
	return (
		<AnimatedLi
			className={`rounded-lg p-2 px-4 mb-2 max-w-[50%] break-words border border-white/20 mobile:max-w-[80%] ${
				sender === 'user'
					? 'text-white self-end ml-4'
					: 'text-ai-green self-start mr-4'
			}`}
			style={style}
		>
			<span style={{ lineHeight: '1.4' }}>{content}</span>
		</AnimatedLi>
	);
});

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

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			if (!userInput.trim()) return;

			setMessages((prev) => [...prev, { content: userInput, sender: 'user' }]);
			setUserInput('');

			setIsTyping(true);

			const prompt = `Human: ${userInput}\nAI`;
			const aiResponse = await fetchChatResponse(prompt);

			setIsTyping(false);

			setMessages((prev) => [...prev, { content: aiResponse, sender: 'ai' }]);
		},
		[userInput]
	);

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
		<ComponentLayout component='chatGPT'>
			<ul
				ref={chatContentRef}
				className="overflow-y-auto p-4 flex flex-col mobile:h-[400px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10"
				style={{ height: 'calc(100% - 40px)' }}
			>
				{messages.length === 0 ? (
					<InitialText>
						<p>
							AI와 대화해 보세요. <br />
							AI는 한국말이 미숙하며, 영어에 능숙합니다.
						</p>
					</InitialText>
				) : (
					messageTransitions((style, message) => (
						<ChatMessage sender={message.sender} style={style} content={message.content} />
					))
				)}

				{isTyping && (
					<div className="absolute bottom-[50px] left-4 text-xs text-white/70 tracking-[2px]">
						AI가 메세지를 입력 중입니다
						<span className="inline-block animate-typing">.
						</span>
						<span className="inline-block animate-typing [animation-delay:0.5s]">.</span>
						<span className="inline-block animate-typing [animation-delay:1s]">.</span>
					</div>
				)}
			</ul>
			<form onSubmit={handleSubmit} className="flex w-full border-t border-white/50 h-10 mt-auto">
				<input
					type='text'
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					placeholder='메세지를 입력하세요.'
					className="appearance-none bg-transparent outline-none text-white cursor-pointer flex-1 py-2 px-3 w-[calc(100%-50px)] placeholder:opacity-100 placeholder:visible placeholder:transition-all placeholder:duration-500 focus:placeholder:opacity-0 focus:placeholder:invisible"
				/>
				<button type='submit' className="py-2 px-3 bg-transparent border-l border-white/50 w-[50px] cursor-pointer">
					<FontAwesomeIcon icon={faPaperPlane} />
				</button>
			</form>
		</ComponentLayout>
	);
};

export default ChatGPT;
