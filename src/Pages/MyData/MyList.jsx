import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import MyData from "./MyData";
import { toast, ToastContainer } from "react-toastify";
import { useQuery } from "react-query";
import Loader from "../../Components/Loader";

const MyList = () => {
    const { userInfo } = useContext(AuthContext);
    // const [loading, setLoading] = useState(true);

    const [myData, setMyData] = useState([]);
    const email = userInfo.email;



    const { data, isLoading, refetch} = useQuery({
        queryKey: ['my-post'],
        queryFn: async () => {
            const response = await axios.get(` http://localhost:4000/my-services?email=${email}`)
            return response.data;
        }
    })
    if(isLoading) return <Loader/>

    const handleDelete = (id) => {
        const procced = confirm('Are you sure delete');
        if (procced) {
            axios.delete(`http://localhost:4000/my-services/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    toast('Delete Successfully')
                    refetch()
                }
            })
        }
    }

    return (
        <div className="home-container">
            <ToastContainer />
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#C8F1F3]">
                            <th className="py-4 px-6 text-lg text-left border-b">Spot Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Spot Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Location</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Update/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(item => <MyData key={item._id} item={item} handleDelete={handleDelete}></MyData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;