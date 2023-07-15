
const Department = require('../models/departmentModel');

exports.createDepartment = async (req, res) => {
    try {
        const department = new Department(req.body);
        await department.save();
        res.status(201).json(department);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        res.status(200).json(department);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteDepartmentById = async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(req.params.id);
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateDepartmentById = async (req, res) => {
    try {
        const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        res.status(200).json(department);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};