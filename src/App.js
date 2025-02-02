import { createBrowserRouter as Router, Outlet } from "react-router";
import NavBar from "./components/NavBar";
import "./App.css";
import FloatingButton from "./reusable/FloatingButton";
import { ThemeProvider } from "./context/ThemeProvider";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import "../src/style.css";
import MenuToggleProvider from "./context/MenuToggle";
import Resume from "./components/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import Loader from "./reusable/Loader";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider>
      <MenuToggleProvider>
        {load && (
          <div className="flex h-screen w-screen items-center justify-center bg-white dark:bg-darkBodyPrimary">
            <Loader load={load} />
          </div>
        )}
        {!load && (
          <div className="App dark:bg-darkBodyPrimary">
            <NavBar />
            <div>
              <Outlet />
              <Footer />
            </div>

            <FloatingButton />
          </div>
        )}
      </MenuToggleProvider>
    </ThemeProvider>
  );
}
export const route = Router([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
