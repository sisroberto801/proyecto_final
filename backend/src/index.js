import app from './app.js';
import env from './config/env.js';
import logger from './logs/logger.js';
import {sequelize} from './database/database.js';
import './models/person.js';
import './models/education.js';
async function main() {
  try {
    console.log('Environment variables:', {
      DB_HOST: env.db_host,
      DB_DATABASE: env.db_database,
      DB_USER: env.db_user,
      DB_DIALECT: env.db_dialect
    });
    await sequelize.sync();
    const port = env.port;
    app.listen(port, () => {
      logger.info('Server on port ' + port);
    });
  } catch (error) {
    console.error('Detailed error starting server:', error);
    logger.error('Error starting server:', error);
  }
}

main();
