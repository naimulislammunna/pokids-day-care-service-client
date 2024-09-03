import { LuCircleDollarSign } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const Service = ({service}) => {
    const {
        _id, 
        price, 
        image_url, 
        service_name, 
        service_area, 
        description} = service;

    return (
        <div >
            <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
                <div className="relative flex h-40 w-full justify-center lg:h-[260px]">
                    
                    <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={image_url}/>
                </div>
                <div className="space-y-2 font-semibold">
                    <h6 className="text-sm md:text-base lg:text-lg text-orange">{service_name}</h6>
                    <p className="text-xs font-semibold text-gray-400 md:text-sm">{description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                            <span className="text-orange"><LuCircleDollarSign/></span>
                            <p>{price}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <span className="text-orange"><FaLocationDot/></span>
                            <p>{service_area}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-sm md:text-base justify-end">
                    <button className="px-7 py-2 border border-gray rounded-full hover:bg-orange">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;