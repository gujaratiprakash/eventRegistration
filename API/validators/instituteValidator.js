const Joi = require('joi');

exports.createInstituteValidator = (req, res, next) => {
    const instituteSchema = Joi.object({
        institute: Joi.string().required(),
        university: Joi.string().optional()
    });

    const { error } = instituteSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};