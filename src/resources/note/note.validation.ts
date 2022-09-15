import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    content: Joi.string().required()
});

export default { create };
