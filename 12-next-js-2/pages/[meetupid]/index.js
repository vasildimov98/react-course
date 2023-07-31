import { ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import {
  connectDatabase,
  getCollections,
  closeConnection,
} from "../api/utils/mongodb";
import Head from "next/head";

const MeetupDetailsPage = ({ meetupData }) => {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetails
        title={meetupData.title}
        image={meetupData.image}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  await connectDatabase();

  const meetups = getCollections("meetups");

  const meetupsId = await meetups.find({}, { _id: 1 }).toArray();

  closeConnection();

  return {
    fallback: false,
    paths: meetupsId.map((meetup) => ({
      params: {
        meetupid: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps({ params }) {
  const meetupId = params.meetupid;

  await connectDatabase();

  const meetupsCollection = getCollections("meetups");

  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      },
    },
  };
}

export default MeetupDetailsPage;
