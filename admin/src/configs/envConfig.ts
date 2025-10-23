import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  PORT: process.env.PORT || 3359,
};

export default envConfig;
