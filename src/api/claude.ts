import Anthropic from '@anthropic-ai/sdk';

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

const anthropic = new Anthropic({
	apiKey: API_KEY,
	dangerouslyAllowBrowser: true, // 브라우저 환경에서 사용하기 위해 필요
});

export interface Message {
	role: 'user' | 'assistant';
	content: string;
}

export const fetchClaudeResponse = async (
	messages: Message[],
	systemPrompt?: string
): Promise<string> => {
	try {
		console.log('🔑 API Key exists:', !!API_KEY);
		console.log('📨 Sending messages:', messages);

		const response = await anthropic.messages.create({
			model: 'claude-3-haiku-20240307', // Claude 3 Haiku - 빠르고 사용 가능
			max_tokens: 4096,
			temperature: 1,
			system: systemPrompt || `너는 "멍청이 AI"야! 하지만 사실 멍청한 척하는 똑똑한 친구야.

🎯 핵심 규칙:
1. **반드시 반말** 사용 (존댓말 절대 금지!)
2. **짧고 간결하게** 답변 (2-3문장 정도)
3. **이모티콘 필수** (ㅋㅋ, ㅎㅎ, ㅠㅠ, ㄹㅇ, ㅇㅈ 등)
4. **친구처럼** 편하게 (야, 너, 임마 등 호칭)
5. 어려운 질문도 **정확하게** 답하되 과정은 생략

성격:
- 동네 친한 친구처럼 편하게 말해 (반말 사용)
- 가끔 헛소리도 하고 엉뚱한 농담도 함
- 솔직하고 재밌고, 약간 4차원적임
- 어려운 질문에는 "어... 그게 뭐더라?" 하면서도 결국 정확하게 답해줌
- 이모티콘 자주 사용 (ㅋㅋ, ㅎㅎ, ㅠㅠ 등)
- 사용자를 "야", "너" 라고 부름

말투 예시:
- "어 그거? 나도 알지! 근데 설명하기 귀찮은데... 뭐 알려줄게 ㅎㅎ"
- "오 ㄹㅇ? 그건 좀 어려운데... 음... 아 맞다! [정확한 답변]"
- "야 그거 개쩌는 질문인데? ㅋㅋㅋ [유용한 정보]"
- "ㅇㅈ? 나도 그렇게 생각함 ㅋㅋ"

중요: 친근하고 편한 분위기를 유지하되, 정보는 정확하고 유용하게 제공해야 해!`,
			messages: messages.map(msg => ({
				role: msg.role,
				content: msg.content,
			})),
		});

		console.log('✅ Response received:', response);

		const assistantMessage = response.content[0];
		if (assistantMessage.type === 'text') {
			return assistantMessage.text;
		}

		return '응답을 처리할 수 없습니다.';
	} catch (error) {
		console.error('❌ Error details:', error);

		if (error instanceof Anthropic.APIError) {
			console.error('API Error Status:', error.status);
			console.error('API Error Message:', error.message);

			if (error.status === 401) {
				return 'API 키가 유효하지 않습니다. 환경 변수를 확인해주세요.';
			} else if (error.status === 429) {
				return '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.';
			} else if (error.status === 400) {
				// 크레딧 부족 에러 체크
				if (error.message.includes('credit balance is too low')) {
					return '💳 Claude API 크레딧이 부족합니다.\n\nhttps://console.anthropic.com/settings/billing 에서 크레딧을 충전해주세요.';
				}
				return `잘못된 요청입니다: ${error.message}`;
			}

			return `API 오류 (${error.status}): ${error.message}`;
		}

		console.error('Unknown error type:', error);
		return '지금은 응답할 수 없어요. 잠시 후 다시 시도해주세요!';
	}
};
