import { json, redirect, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ params }) {
  const eventId = params.id;

  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw json({ message: "Failed to load event detail." }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.id;

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Failed to delete event." }, { status: 500 });
  }

  return redirect("/events");
}
