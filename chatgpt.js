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
  const prompt = `
    Project name: ZION SAFETY EQUIPMENT
    This project topic is THE ROLE OF ARTIFICIAL INTELLIGENCE(AI) IN WEB DEVELOPMENT FOR INCREASING EFFICIENCY, ENHANCED SAFETY, AND INTEGRITY RELIABILITY IN AN ORGANIZATION 
    Make sure answers are related to the topic
  `;
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