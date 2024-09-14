import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-10">
            <h1 className="text-2xl text-red-700 font-bold">Page Not Found</h1>
            <Link to='/'><button className="bg-orange text-white text-lg font-bold px-4 py-2 rounded-full my-4">Home</button></Link>
        </div>
    );
};

export default ErrorPage;