// Import the necessary modules here
import winston from 'winston';

export const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: {},
  transports:[
    new winston.transports.File({filename: 'error.log'})
  ]
});

export const loggerMiddleware = async (err, req, res, next) => {

  // Write your code here
  logger.log({
    level: 'error',
    timestamp: new Date().toString(),
    'request URL': req.originalUrl,
    'error message': err.message
  })

};