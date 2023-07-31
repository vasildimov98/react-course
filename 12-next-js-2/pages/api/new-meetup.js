import {
  connectDatabase,
  getCollections,
  closeConnection,
} from "./utils/mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  await connectDatabase();

  const meetupsCollection = getCollections("meetups");
  await meetupsCollection.insertOne(data);

  closeConnection();

  res.status(201).json({ message: "Meetup inserted!" });
}

export default handler;
