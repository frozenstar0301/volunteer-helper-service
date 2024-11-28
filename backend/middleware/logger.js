const fs = require('fs');
const path = require('path');

// Define log directory and file path
const logDirectory = path.join(__dirname, '../logs');
const logFilePath = path.join(logDirectory, 'access.log');

// Ensure the log directory exists, create it if it doesn't
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

// Ensure the log file exists, create it if it doesn't
if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, ''); // Create an empty file
}

// Log function to append logs to the file
const logger = (req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url} \n`;
  
  // Append log message to the log file
  fs.appendFileSync(logFilePath, logMessage);
  
  next();
};

module.exports = logger;
