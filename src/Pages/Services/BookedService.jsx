import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../../Components/Loader";
import BookedData from "./BookedData";

const BookedService = () => {
    const { userInfo } = useContext(AuthContext);
    const email = userInfo.email;


    const { data, isLoading} = useQuery({
        queryKey: ['booked-data'],
        queryFn: async () => {
            const response = await axios.get(` http://localhost:4000/booked-service?email=${email}`)
            return response.data;
        }
    })

    if(isLoading) return <Loader/>

    return (
        <div className="home-container">
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#C8F1F3]">
                            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Service Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Location</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Provider Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(item => <BookedData key={item._id} item={item}></BookedData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedService;