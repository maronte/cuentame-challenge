import ENV_VARIABLES from './config/config.js'
import app from './app.js'
import logger from './log/logger.js'

/**
 * Do anything necessary to start the app
 */
async function main () {
  const PORT = parseInt(ENV_VARIABLES.PORT)
  app.listen(PORT)
  logger.info(`App initialized, listening on port: ${PORT}`)
}

main()
