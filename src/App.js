import {
  createBrowserRouter as Router,
  RouterProps,
  Outlet,
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Error from "./components/Error";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}
export const route = Router([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
    errorElement: <Error />,
  },
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={route} />);
