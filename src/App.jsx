import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/CountryDetails";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "country",
        element: <Country></Country>,
      },
      {
        path: "country/:id",
        element: <CountryDetails></CountryDetails>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
