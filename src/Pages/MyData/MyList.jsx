import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import MyData from "./MyData";
import { toast, ToastContainer } from "react-toastify";

const MyList = () => {
    const { userInfo } = useContext(AuthContext);
    // const [loading, setLoading] = useState(true);

    const [myData, setMyData] = useState([]);
    const email = userInfo.email;
   
    useEffect(() => {  
        if (!email) {
           return 
        }
        
        else if(email){
            const uri = `http://localhost:4000/my-services?email=${email}`
            axios.get(uri)
            .then(data => {
                console.log("data",data.data);
                
                setMyData(data.data)
            })
        }    
    }, [email])

    const handleDelete = (id) => {

        const procced = confirm('Are you sure delete');
        if (procced) {
            fetch(`http://localhost:4000/my-services/${id}`,{
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        const remaining = myData.filter(item => item._id !== id);
                        setMyData(remaining);
                        toast('Delete Service')
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="home-container">
            <ToastContainer/>
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
                            myData?.map(item => <MyData key={item._id} item={item} handleDelete={handleDelete}></MyData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;