const Joi = require('joi');

const sendValidationError = (error, res) => {
  const { details } = error;
  const message = details.map(i => i.message).join(',');

  res.status(422).json({
    error: message 
  })
};

const middleware = (schema, property) => {
  return (req, res, next) => {
    for (const key in schema) {
      const data= schema[key].validate(req[key]);
      const error = data.error;

      if (error) return sendValidationError(error, res);
    }

    next();
  }
}

module.exports = middleware;