import express from "express";
import cors from "cors";
import morgan from "morgan";
import Routes from './routes/index.js'

const app = express();

// middle-wares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1', Routes)

export default app;
