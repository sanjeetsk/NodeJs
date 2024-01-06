// Please don't change the pre-written code
// Import the necessary modules here
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service:'user-service' },
  transports:[
    new winston.transports.File({filename: 'combined.log'})
  ]
});

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  const logData = `${new Date().toString()} \n req URL: ${req.url} \n reqBody: ${JSON.stringify(req.body)}`;
  logger.info(logData);
  next();
};

export default loggerMiddleware;
