/* import { connectToDatabase } from '../db';

export default async function handler(req, res) {
    const client = await connectToDatabase();

    if (req.method === 'POST') {
        // const { formData } = req.body;
        // console.log(formData);
        // Perform any necessary data validation or transformation here

        const collection = client.db().collection('users');
        await collection.insertOne(req.body);

        res.status(201).json({ message: 'Data inserted successfully.' });
    } else if (req.method === 'GET') {
        const collection = client.db().collection('users');
        const data = await collection.find().toArray();

        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
} */
import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

// Connection URL
const url = 'mongodb+srv://imbuesoftworld:mqmMHkuWGMtCCXlo@cluster0.sozqsp2.mongodb.net/avsar';

// Database Name
const dbName = 'avsar';

export default async function handler(req, res) {
    // Connect to MongoDB
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);

    if (req.method === 'POST') {
        // Store data in MongoDB
        const { data } = req.body;
        const collection = db.collection('users');
        await collection.insertOne(data);
        res.status(200).json({ message: 'Data stored successfully!' });
    } else if (req.method === 'GET') {
        // Fetch data from MongoDB
        const collection = db.collection('users');
        const data = await collection.find({}).toArray();
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }

    // Close the MongoDB connection
    client.close();
}
