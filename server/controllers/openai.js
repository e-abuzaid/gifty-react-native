import { Configuration, OpenAIApi } from 'openai'
import * as dotenv from 'dotenv'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getQueries = async (req, res) => {
    const {prompt} = req.body
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        res.status(200).json(response.data.choices[0].text)
    } catch (error) {
        console.log(error)
    }

}