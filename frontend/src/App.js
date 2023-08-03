import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./routes/HomePage";
import Event from "./routes/Event";
import EditEvent from "./routes/EditEvent";
import EventDetail from "./routes/EventDetail";
import NewEvent from "./routes/NewEvent";
import Root from "./routes/Root";
import EventRoot from "./routes/EventRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          { index: true, element: <Event /> },
          { path: ":someId", element: <EventDetail /> },
          { path: "new", element: <NewEvent /> },
          { path: ":someId/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
