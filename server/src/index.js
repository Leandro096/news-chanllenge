import express from 'express';
import cors from 'cors';
import userRouter from './routers/user.js';
import newsRouter from './routers/news.js';

import './db/dbconnection.js';

const port = 5555;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/news', newsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
