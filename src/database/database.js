import Sequelize from 'sequelize'
import ENV_VARIABLES from '../config/config.js'

export const sequelize = new Sequelize(
  ENV_VARIABLES.DATABASE_NAME,
  ENV_VARIABLES.DATABASE_USER,
  ENV_VARIABLES.DATABASE_PASSWORD,
  {
    port: ENV_VARIABLES.DATABASE_PORT,
    host: ENV_VARIABLES.DATABASE_HOST,
    dialect: 'mysql',
    logging: ENV_VARIABLES.NODE_ENV !== "production"
  }
)
