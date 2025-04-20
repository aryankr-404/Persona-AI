import express from 'express';
import dotenv from 'dotenv';
import getPiyushSirResponse from './Personalities/PiyushSir.Persona.js';
import getHiteshSirResponse from './Personalities/HiteshSir.Persona.js';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/chat', (req, res) => {
    const userPrompt = req.query.prompt;
    const personality = req.query.personality;

    if (personality === 'Piyush') {
        getPiyushSirResponse(userPrompt).then((response) => {
            res.send(response);
        }).catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
    } else if (personality === 'Hitesh') {
        getHiteshSirResponse(userPrompt).then((response) => {
            res.send(response);
        }).catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});