import express from "express";
import mongoose from "mongoose";
import config from "config";
import authRouter from '../server/routes/auth.routes.js'
import fileRouter from '../server/routes/file.routes.js'
import cors from "./middleware/cors.middleware.js";

const app = express();
const PORT = config.get('serverPort')

app.use(cors)
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get('dbURL'))

        app.listen(PORT, () => {
            console.log(`Server started with port: ${PORT}`);
        })
    } catch (e) {
        console.error(e)
    }
}

start()