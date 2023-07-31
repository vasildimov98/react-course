import { MongoClient } from "mongodb";

let client;

export const connectDatabase = async () => {
  client = await MongoClient.connect(
    "mongodb+srv://vasil98:GXxSUM7eM6285i8S@test.hbelv3j.mongodb.net/meetups?retryWrites=true&w=majority"
  );
};

export const getCollections = (collection) => {
  return client.db().collection(collection);
};

export const closeConnection = () => {
  client.close();
};
