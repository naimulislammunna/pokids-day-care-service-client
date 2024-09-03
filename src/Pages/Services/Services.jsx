import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="home-container my-10">
            <h3 className="text-center text-orange text-2xl font-bold my-5">Our Popular Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(item => <Service 
                        key={item._id} 
                        service={item}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;