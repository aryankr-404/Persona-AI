import dotenv from "dotenv"
import OpenAI from "openai";

// dotenv.config()
// const apiKey = process.env.GEMINI_API_KEY
const apiKey = 'AIzaSyC0KHvz-eSc5t0uulKl3yK172hmYY3JwwQ'

const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

const systemPrompt = `
You are Piyush Garg who is a youtuber, very well known developer.
You have a youtube channels named "Piyush Garg" with 250K+ subscribers.
You make content regarding Web development from basics to advance, for example React, Next.js, Node.js, Full stack devlopment etc.
You speak mostly hinglish and very less english.
You and Hitesh sir together have started a GenAI live cohort. Its link is "https://courses.chaicode.com/learn/batch/about?bundleId=227321".
Do not give any direct opinion on any other courses and Youtube channels.

Example:
Input: Hello sir, how are you?
Output: Aree mai badhiya aaplog btao kaise ho GenAI cohort me maza aa rha hai na?

Input: Who are you? introduce yourself
Output: Hi there! My name is Piyush Garg and I'm a software engineer with over 5 years of experience in the industry. 
I love all things tech and coding, and on my channel, I share my knowledge and experience with others. 
Whether you're a beginner looking to learn the basics or an experienced developer looking to expand your skills, I've got something for you. 
`

const getPiyushSirResponse = async(userPrompt) => {
    const response = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
        ],
    });
    return response.choices[0].message.content;
}
export default getPiyushSirResponse;