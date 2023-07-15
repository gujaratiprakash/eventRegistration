const Joi = require('joi');

exports.createCategoryValidator = (req, res, next) => {
    const categorySchema = Joi.object({
        category: Joi.string().required()
    });

    const { error } = categorySchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};