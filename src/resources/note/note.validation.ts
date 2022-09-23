import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().valid('Task', 'Random Thought', 'Idea').required(),
    content: Joi.string().required()
});

const update = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    created: Joi.string().required(),
    category: Joi.string().valid('Task', 'Random Thought', 'Idea').required(),
    content: Joi.string().required(),
    isArchive: Joi.boolean().required()
});

export default { create, update };
