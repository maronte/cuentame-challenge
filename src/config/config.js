import * as dotenv from 'dotenv'
dotenv.config()

const env = process.env

const ENV_VARIABLES = {
  NODE_ENV: env.NODE_ENV || "development",
  PORT: env.PORT || 3000,
  DATABASE_NAME: env.DATABASE_NAME,
  DATABASE_USER: env.DATABASE_USER,
  DATABASE_PASSWORD: env.DATABASE_PASSWORD,
  DATABASE_PORT: env.DATABASE_PORT,
  DATABASE_HOST: env.DATABASE_HOST
}

export default ENV_VARIABLES
