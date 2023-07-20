import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=2048x2048&w=is&k=20&c=98qMLmYY4cYbb0jGZcyFntjUJpN8UfixLcisXpU7bDk=",
    address: "Some address 5, 12345 Some City",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=2048x2048&w=is&k=20&c=98qMLmYY4cYbb0jGZcyFntjUJpN8UfixLcisXpU7bDk=",
    address: "Some address 10, 12345 Some City",
  },
];

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
