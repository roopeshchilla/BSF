const { createLogger, format, transports, config } = require('winston');

//formatting logs
const { combine, timestamp, json } = format;
 
const logger = createLogger({
   transports: [
       new transports.Console()
     ]
 });

 const baseControllerLogger = createLogger({
  levels: config.syslog.levels,
  level: 'debug',
  defaultMeta: { component: 'baseControllerLogger' },
  format: combine(
      timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
      }),
      json()
    ),
     transports: [
        new transports.File({ filename: 'logs/baseController.log', handleExceptions: true})
         ]
 });
 const vinValidationLogger = createLogger({
    levels: config.syslog.levels,
    level: 'debug',
    defaultMeta: { component: 'vinValidationLogger' },
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        json()
      ),
     
    transports: [
        new transports.File({ filename: 'logs/vinValidationController.log' })
        
      ],
      exceptionHandlers: [
        new transports.File({ filename: 'logs/exceptions.log', handleExceptions: true })
      ]
      
 });
 const mtoLogger = createLogger({
  levels: config.syslog.levels,
  level: 'debug',
  defaultMeta: { component: 'mtoLogger' },
  format: combine(
      timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
      }),
      json()
    ),
   
  transports: [
      new transports.File({ filename: 'logs/mtoController.log' })
      
    ],
    exceptionHandlers: [
      new transports.File({ filename: 'logs/exceptions.log', handleExceptions: true })
    ]
    
});

const servicesLogger = createLogger({
  levels: config.syslog.levels,
  level: 'debug',
  defaultMeta: { component: 'servicesLogger' },
  format: combine(
      timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
      }),
      json()
    ),
   
  transports: [
      new transports.File({ filename: 'logs/services.log' })
      
    ],
    exceptionHandlers: [
      new transports.File({ filename: 'logs/exceptions.log', handleExceptions: true })
    ]
    
});


//exceptionHandlers  are not working. Leave it for later. 

 module.exports = {
     logger: logger,
     baseControllerLogger: baseControllerLogger,
     vinValidationLogger: vinValidationLogger,
     mtoLogger: mtoLogger,
     servicesLogger:servicesLogger
 }