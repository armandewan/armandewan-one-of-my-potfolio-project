import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Page/Home";
// import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Error from "../Components/Error";
import Skills from "../Components/Skills";
import AboutMe from "../Components/AboutMe";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/#aboutMe',
          element:<AboutMe/>
        },
        {
          path:'/#skill',
          element:<Skills/>
        },
        {
          path:'/#projects',
          element:<Projects/>
        },
        {
          path:'/#contact',
          element:<Contact/>
        },
      ]
    },
  ]);