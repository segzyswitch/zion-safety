import axios from 'axios';
const config = useRuntimeConfig();

const API_KEY = config.public.apiKey; // Replace with your OpenAI API key

const instance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const getChatResponse = async (message) => {
  // return console.log(API_KEY)
  const prompt = ``;
  try {
    const response = await instance.post('/chat/completions', {
      model: 'gpt-4o-mini',
      messages: [
        {role: 'system', content: prompt},
        { role: 'user', content: message }
      ]
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};