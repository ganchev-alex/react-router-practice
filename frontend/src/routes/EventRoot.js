import { Outlet } from "react-router-dom";

import EventNavigation from "../components/EventsNavigation";
import { Fragment } from "react";

function EventRoot() {
  return (
    <Fragment>
      <EventNavigation />
      <Outlet />
    </Fragment>
  );
}

export default EventRoot;
