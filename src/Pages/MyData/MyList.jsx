import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import MyData from "./MyData";

const MyList = () => {
    const { userInfo } = useContext(AuthContext);
    // const [loading, setLoading] = useState(true);

    const [myData, setMyData] = useState([]);
    const email = userInfo.email;
    console.log('my data', myData);
   
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

    return (
        <div className="home-container">
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
                            myData?.map(item => <MyData key={item._id} item={item}></MyData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;