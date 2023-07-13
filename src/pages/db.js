import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://imbuesoftworld:mqmMHkuWGMtCCXlo@cluster0.sozqsp2.mongodb.net/avsar'; // Update with your MongoDB connection URI
const dbName = 'avsar'; // Update with your database name

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(dbName);

  cachedClient = client;

  return client;
}

export { connectToDatabase };
