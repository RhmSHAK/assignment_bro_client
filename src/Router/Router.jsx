import { createBrowserRouter } from "react-router-dom";
import Start from "../Layout/Start";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/Register/SignUp";
import CreateAssignment from "../Pages/CreateData/CreateAssignment";
import AllAssignment from "../Pages/allAssignment/AllAssignment";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Update from "../Pages/Update/Update";
import ViewDetails from "../Pages/View/ViewDetails";
import MySubmitted from "../Pages/MySubmittes/MySubmitted";
import PendingAssignment from "../Pages/Pending/PendingAssignment";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Start></Start>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
           path: '/',
           element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path:'/createAssignment',
          element: <CreateAssignment></CreateAssignment>
        },
        {
          path: '/assignment',
          element: <AllAssignment></AllAssignment>,
          loader: () => fetch('https://assignment-11-server-eta-ashy.vercel.app/assignment')
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`https://assignment-11-server-eta-ashy.vercel.app/list/${params.id}`)
        },
        {
          path: '/view/:id',
          element: <ViewDetails></ViewDetails>,
          loader: ({params}) => fetch(`https://assignment-11-server-eta-ashy.vercel.app/list/${params.id}`)
        },
        {
          path: '/submitAssignment',
          element: <MySubmitted></MySubmitted>,
        
        },
        {
          path: '/pendingAssignment',
          element: <PendingAssignment></PendingAssignment>
        }
      ]
    },
  ]);

  export default router;