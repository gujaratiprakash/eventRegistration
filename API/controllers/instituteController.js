
const Institute = require('../models/instituteModel');

exports.createInstitute = async (req, res) => {
    try {
        const institute = new Institute(req.body);
        await institute.save();
        res.status(201).json(institute);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getInstitutes = async (req, res) => {
    try {
        const institutes = await Institute.find();
        res.status(200).json(institutes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getInstituteById = async (req, res) => {
    try {
        const institute = await Institute.findById(req.params.id);
        if (!institute) {
            return res.status(404).json({ error: 'Institute not found' });
        }
        res.status(200).json(institute);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteInstituteById = async (req, res) => {
    try {
        const institute = await Institute.findByIdAndDelete(req.params.id);
        if (!institute) {
            return res.status(404).json({ error: 'Institute not found' });
        }
        res.status(200).json({ message: 'Institute deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateInstituteById = async (req, res) => {
    try {
        const institute = await Institute.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!institute) {
            return res.status(404).json({ error: 'Institute not found' });
        }
        res.status(200).json(institute);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};