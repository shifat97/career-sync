import express from "express";
import cors from "cors";
import connectDB from "@/db";
import { envConfig } from "@/config/index";

const app = express();

connectDB();

app.use(express.json());
app.use(cors({
  origin: envConfig.ALLOWED_ORIGIN,
}));

app.listen(envConfig.PORT, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
