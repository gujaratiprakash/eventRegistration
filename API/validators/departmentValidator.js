const Joi = require('joi');

exports.createDepartmentValidator = (req, res, next) => {
    const departmentSchema = Joi.object({
        name: Joi.string().required()
    });

    const { error } = departmentSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};