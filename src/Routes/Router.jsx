import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import AllDocuments from "../Pages/Dashboard/DashBoard/AllDocuments.jsx";

import Chat from "../Pages/Dashboard/DashBoard/Chat.jsx";
import CreateDocument from "../Pages/Dashboard/DashBoard/CreateDocument.jsx";
import Document from "../Pages/Dashboard/DashBoard/Document.jsx";
import SharedDocuments from "../Pages/Dashboard/DashBoard/SharedDocument.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Four04 from "../components/404/404.jsx";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <CreateDocument />,
      },
      {
        path: "/dashboard/createDocument",
        element: <CreateDocument />,
      },
      {
        path: "/dashboard/AllDocuments",
        element: <AllDocuments />,
      },
      {
        path: "/dashboard/SharedDocument",
        element: <SharedDocuments />,
      },
      {
        path: "/dashboard/editDocument/:documentId",
        element: <Document />, loader: async ({ params }) =>
          await fetch(
            `http://localhost:5000/api/v1/docs/documents/test/${params.documentId}`,
            {
              headers: {
                "authorization": `bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
      },
      {
        path: "/dashboard/chat",
        element: <Chat />,
      },
      {
        path: "*",
        element: <Four04 />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Four04 />,
  },
]);

export default router;
