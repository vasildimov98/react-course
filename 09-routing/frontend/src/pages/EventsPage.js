import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Failed to load events." }), {
    //   status: 500,
    // });

    throw json({ message: "Failed to load events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
