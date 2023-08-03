import { Fragment } from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "This is the first event!",
  },
  {
    id: "e2",
    title: "This is the second event!",
  },
  {
    id: "e3",
    title: "This is the third event!",
  },
];

function Event() {
  return (
    <Fragment>
      <h1> This is The Event Page!</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Event;
