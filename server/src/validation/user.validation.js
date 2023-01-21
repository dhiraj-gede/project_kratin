const Joi = require("joi");
const { objectId } = require("./custom.validation");
const getUser = {
    params: Joi.object().keys({
        userId: Joi.string().custom(objectId)
    }),
};
const setData = {
    params: Joi.object().keys({
        userId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        height: Joi.number().required(),
        weight: Joi.number().required(),
        image: Joi.string()
    }),
};
module.exports = {
    getUser, setData
}