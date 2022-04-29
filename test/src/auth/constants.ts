import * as dotenv from 'dotenv'
dotenv.config();

export const jwtConstants = {
    accesssecret: process.env.JWT_SECRET_KEY || '1234',
    refreshsecret: process.env.JWT_REFRESH_TOKEN || '1234'
  };