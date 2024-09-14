import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import SignIn from "../Pages/signIn/SignIn";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/Services/AddService";
import AllServices from "../Pages/Services/AllServices";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/Services/ViewDetails";
import MyList from "../Pages/MyData/MyList";
import ErrorPage from "../Components/ErrorPage";
import BookedService from "../Pages/Services/BookedService";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <ErrorPage/>,
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
                element: <PrivateRoute><AddService/></PrivateRoute>
            },
            {
                path: '/all-service',
                element: <AllServices></AllServices>
            },
            {
                path: '/my-list',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: '/booked-services',
                element: <PrivateRoute><BookedService></BookedService></PrivateRoute>
            },
            {
                path: '/services/:id',
                element:
                    <PrivateRoute>
                        <ViewDetails></ViewDetails>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
            }
        ]
    }
])

export default router;