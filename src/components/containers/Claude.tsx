import { useRef, useEffect, useState, memo, useCallback } from "react";
import { fetchClaudeResponse, type Message } from "../../api/claude";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";

import ComponentLayout from "../layout/ComponentLayout";
import InitialText from "../atoms/InitialText";

const ChatMessage = memo(
  ({
    sender,
    style,
    content,
  }: {
    sender: "user" | "assistant";
    style: any;
    content: string;
  }) => {
    const AnimatedLi = animated("li");
    return (
      <AnimatedLi
        className={`rounded-lg p-3 px-4 mb-2 max-w-[65%] break-words border mobile:max-w-[85%] ${
          sender === "user"
            ? "bg-white/10 border-white/30 text-white self-end ml-4"
            : "bg-purple-500/20 border-purple-400/40 text-purple-100 self-start mr-4"
        }`}
        style={style}
      >
        <div className="text-xs font-semibold mb-1 opacity-70">
          {sender === "user" ? "You" : "멍청이 AI"}
        </div>
        <div style={{ lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
          {content}
        </div>
      </AnimatedLi>
    );
  }
);

const Claude: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
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

  const handleClearChat = useCallback(() => {
    setMessages([]);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!userInput.trim()) return;

      const newUserMessage: Message = { content: userInput, role: "user" };
      setMessages((prev) => [...prev, newUserMessage]);
      setUserInput("");

      setIsTyping(true);

      // Claude API는 전체 대화 히스토리를 전송
      const claudeResponse = await fetchClaudeResponse([
        ...messages,
        newUserMessage,
      ]);

      setIsTyping(false);

      const assistantMessage: Message = {
        content: claudeResponse,
        role: "assistant",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    },
    [userInput, messages]
  );

  const messageTransitions = useTransition(messages, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    trail: 200,
    config: {
      tension: 180,
      friction: 24,
    },
  });

  return (
    <ComponentLayout component="claude">
      <div className="relative h-full flex flex-col">
        {messages.length > 0 && !isTyping && (
          <button
            onClick={handleClearChat}
            className="absolute top-2 right-2 z-10 p-2 bg-red-500/20 hover:bg-red-500/40 border border-red-400/40 rounded-lg transition-all duration-200"
            title="대화 내역 지우기"
          >
            <FontAwesomeIcon icon={faTrash} className="text-red-300 text-sm" />
          </button>
        )}
        <ul
          ref={chatContentRef}
          className="overflow-y-auto p-4 flex flex-col mobile:h-[400px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-purple-500/30 hover:[&::-webkit-scrollbar-thumb]:bg-purple-500/50"
          style={{ height: "calc(100% - 50px)" }}
        >
          {messages.length === 0 ? (
            <InitialText>
              <p>멍청이랑 대화해보세요.</p>
            </InitialText>
          ) : (
            messageTransitions((style, message) => (
              <ChatMessage
                sender={message.role}
                style={style}
                content={message.content}
              />
            ))
          )}

          {isTyping && (
            <div className="flex items-center gap-2 p-3 px-4 mb-2 max-w-[65%] rounded-lg bg-purple-500/20 border border-purple-400/40 self-start mr-4">
              <div className="text-xs font-semibold text-purple-100 opacity-70">
                멍청이 AI
              </div>
              <div className="flex gap-1">
                <span className="inline-block w-2 h-2 bg-purple-300 rounded-full animate-bounce [animation-delay:0s]"></span>
                <span className="inline-block w-2 h-2 bg-purple-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="inline-block w-2 h-2 bg-purple-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </ul>
        <form
          onSubmit={handleSubmit}
          className="flex w-full border-t border-white/50 h-[50px] mt-auto"
        >
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="메시지를 입력하세요..."
            disabled={isTyping}
            className="appearance-none bg-transparent outline-none text-white cursor-text flex-1 py-2 px-3 disabled:opacity-50 disabled:cursor-not-allowed placeholder:opacity-100 placeholder:visible placeholder:transition-all placeholder:duration-300 focus:placeholder:opacity-0 focus:placeholder:invisible"
          />
          <button
            type="submit"
            disabled={isTyping || !userInput.trim()}
            className="py-2 px-3 bg-transparent border-l border-white/50 w-[50px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/5 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </ComponentLayout>
  );
};

export default Claude;
