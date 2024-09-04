import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import SignIn from "../Pages/signIn/SignIn";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/Services/AddService";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/add-service',
                element: <AddService/>
            }
        ]
    }
])

export default router;