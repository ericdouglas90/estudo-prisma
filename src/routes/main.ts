import { Router } from 'express';

import { createUser } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.get('/test', (req, res) => {
    res.json({ message: true })
});

mainRouter.post('/user', async (req, res) => {
    const { name, email } = req.body;

    const user = await createUser({ name, email });

    if (user) {
        return res.status(201).json({ user });
    } else {
        return res.status(400).json({ error: 'Ocorreu algum erro ao criar usuario.' });

    }

});