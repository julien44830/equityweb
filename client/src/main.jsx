import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import FormPageDalt from "./pages/FormPageDalt";
import QuizPage from "./pages/QuizPage";
import EyeTrackingForm from "./components/EyeTrackingForm";
import "./styles/globals-utilities.css";
import "./styles/responsive.css";
import "./styles/globals.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/immersion",
        element: <FormPage />,
      },
      {
        path: "/immersion-daltonisme",
        element: <FormPageDalt />,
      },
      {
        path: "/pascal",
        element: <EyeTrackingForm />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
        loader: () =>
          fetch("https://cors-anywhere.herokuapp.com/https://functional-aridatha-wild-code-school-21c14b3f.koyeb.app/"),
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
