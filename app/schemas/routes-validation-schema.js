const Joi = require('joi');

const schemas = {
  bookCreate: {
    body: Joi.object().keys({
      title: Joi.string().required(),
      author: Joi.string().required(),
    }).required(),
  },
  bookList: {
    query: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  },
  bookShow: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }).required(),
  },
  bookUpdate: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }).required(),
    body: Joi.object().keys({
      title: Joi.string(),
      author: Joi.string(),
    }).required(),
  },
  bookDelete: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }).required(),
  },
};

module.exports = schemas;
