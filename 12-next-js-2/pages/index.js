import MeetupList from "../components/meetups/MeetupList";
import {
  closeConnection,
  connectDatabase,
  getCollections,
} from "./api/utils/mongodb";
import Head from "next/head";

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />;
    </>
  );
};

export async function getStaticProps() {
  await connectDatabase();

  const meetupsCollection = getCollections("meetups");

  const meetups = await meetupsCollection.find().toArray();

  closeConnection();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default HomePage;
