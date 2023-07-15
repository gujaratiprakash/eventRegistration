const mongoose = require('mongoose');

exports.createParticipates = async (req, res) => {
    try {
        const participatesCollectionSchema = new mongoose.Schema({}, { strict: false })
        const ParticipatesCollection = mongoose.model('participates', participatesCollectionSchema)
        const ParticipatesCollectionObj = new ParticipatesCollection(req.body);
        await ParticipatesCollectionObj.save();
        res.status(201).json({
            "msg": "Data Saved Successfully"
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getParticipates = async (req, res) => {
    try {
        const participatesCollectionSchema = new mongoose.Schema({}, { strict: false })
        const ParticipatesCollection = mongoose.model('participates', participatesCollectionSchema)
        const participates = await ParticipatesCollection.find();
        res.status(200).json(participates);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getParticipatesById = async (req, res) => {
    try {
        const participatesCollectionSchema = new mongoose.Schema({}, { strict: false })
        const ParticipatesCollection = mongoose.model('participates', participatesCollectionSchema)
        const participates = await ParticipatesCollection.findById(req.params.id);
        if (!participates) {
            return res.status(404).json({ error: 'Participates not found' });
        }
        res.status(200).json(participates);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};