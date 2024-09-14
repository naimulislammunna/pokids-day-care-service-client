import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const AllService = ({ service }) => {
    const { _id,
        service_name,
        service_area,
        price,
        description,
        image_url,
        email,
        displayName,
        photoURL } = service;
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center md:flex-row bg-white border rounded-lg border-orange ">
                <div className="group relative  sm:w-[350px] ">
                    <img width={350} height={350} className="h-full w-full scale-105 transform rounded-lg  bg-black/70" src={image_url} alt="card navigate ui" />
                    <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                    <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
                </div>
                <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                    <div className="space-y-1">
                        <h2 className="text-center text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">{service_name}</h2>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1 items-center">
                                <span className="text-orange"><LuCircleDollarSign /></span>
                                <p>{price}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <span className="text-orange"><FaLocationDot /></span>
                                <p>{service_area}</p>
                            </div>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <img src={photoURL} alt="" className="w-12 h-12 rounded-full" />
                        <p>{displayName}</p>
                        <p>{email}</p>
                    </div>
                    <div>
                        <Link to={`/services/${_id}`}>
                            <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllService;


