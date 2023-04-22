import * as Joi from '@hapi/joi';

const joiSchema = {
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().default(3000),
};
export const envSchema = Joi.object(joiSchema);
