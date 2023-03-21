import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const openaiApi = axios.create({
	baseURL: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
	headers: {
		'Authorization': `Bearer ${API_KEY}`,
		'Content-Type': 'application/json',
	},
});

export const fetchChatResponse = async (prompt: string) => {
	try {
		const response = await openaiApi.post('', {
			prompt: prompt,
			temperature: 0.9,
			max_tokens: 300,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0.6,
			stop: ['Human:', 'AI:'],
		});

		const aiResponse = response.data.choices[0].text.trim();
		const cleanedAiResponse = aiResponse.replace(/^:\s*/, '');

		return cleanedAiResponse;
	} catch (error) {
		console.error('Error fetching chat response:', error);
	}
};
