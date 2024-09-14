import { useEffect, useState } from "react";
import AllService from "./AllService";

const PopulerServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="home-container my-10">
            <h3 className="text-center text-orange text-2xl font-bold my-5">Our Popular Services</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    services.slice(0, 6).map(item => <AllService
                        key={item._id} 
                        service={item}></AllService>)
                }
            </div>
        </div>
    );
};

export default PopulerServices;