import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import QuizPage from "./pages/QuizPage";
import "./styles/globals-utilities.css";
HomePage
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "immersion",
        element: <FormPage />,
      },
      {
        path: "quiz",
        element: <QuizPage />,
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
