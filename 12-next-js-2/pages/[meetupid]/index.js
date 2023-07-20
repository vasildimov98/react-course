import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsPage = ({ meetupData }) => {
  return (
    <MeetupDetails
      title={meetupData.title}
      image={meetupData.image}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export function getStaticProps({ params }) {
  const meetupId = params.meetupid;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=2048x2048&w=is&k=20&c=98qMLmYY4cYbb0jGZcyFntjUJpN8UfixLcisXpU7bDk=",
        id: meetupId,
        title: "A First Meetup",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetailsPage;
