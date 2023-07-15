const Joi = require('joi');

exports.createEventValidator = (req, res, next) => {
    const eventSchema = Joi.object({
        title: Joi.string().required(),
        categoryId: Joi.string().optional()
    });

    const { error } = eventSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};