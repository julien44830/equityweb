import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import FormPage from "./pages/FormPage";
import QuizPage from "./pages/QuizPage";
import "./styles/globals-utilities.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"formpage",
    element: <FormPage />,
  },
  {
    path: "quizpage",
    element: <QuizPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
