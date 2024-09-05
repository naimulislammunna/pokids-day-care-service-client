import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const ViewDetails = () => {
    const { userInfo } = useContext(AuthContext);
    const service = useLoaderData();
    const {
        service_name,
        service_area,
        price,
        description,
        image_url,
        email,
        displayName,
        photoURL } = service;

    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        return () => document.body.style.overflow = 'auto';
    }, [openModal]);

    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            service_name,
            service_area,
            price,
            image_url,
            my_email: userInfo.email,
            my_name: userInfo.displayName,
            provider_email: email,
            provider_Name: displayName
        }
    })

    const onSubmit = async(data) => {
        await axios.post('http://localhost:4000/booked-service', { data })
            .then(() => {
                toast('Booked Service')
                
            });
    }


    return (
        <>
            <div className="flex flex-col items-center justify-center md:flex-row bg-white">
                <div className="group relative  sm:w-[350px] ">
                    <img width={350} height={350} className="h-full w-full scale-105 transform rounded-lg  bg-black/70" src={image_url} alt="card navigate ui" />
                    <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]"><svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><g id="style=linear"><g id="add"><path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path><path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path></g></g></g></svg></span>
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
                        <Link >
                            <button onClick={() => setOpenModal(true)} className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal */}

            <div>
                <ToastContainer/>
                <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-slate-50 drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-100'}`}>
                        <div className="sm:w-[70%] w-[90%] px-4 sm:px-6 lg:px-8 py-8">
                            <button onClick={() => { setOpenModal(false) }} className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6">Close</button>
                            <div className="w-full">
                                <div className="bg-white border rounded-lg border-cyan-800 my-10 w-full mx-auto">
                                    <div className="mx-20 py-10">
                                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className="text-sm  font-medium leading-none " htmlFor="first_name">
                                                        Service Name
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="first_name"
                                                        placeholder="serviceName"
                                                        name="serviceName"
                                                        type="text"
                                                        defaultValue={service_name}
                                                        disabled
                                                        {...register("service_name")}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="first_name">
                                                        Service Area
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="first_name"
                                                        placeholder="location"
                                                        name="location"
                                                        type="text"
                                                        disabled
                                                        defaultValue={service_area} {...register("service_area")}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="first_name">
                                                        Price
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="first_name"
                                                        placeholder="price"
                                                        name="price"
                                                        type="text"
                                                        disabled
                                                        defaultValue={price} {...register("price")}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="email">
                                                        Image URL
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="email"
                                                        placeholder="Enter your Image URL"
                                                        name="imageUrl"
                                                        type="text"
                                                        disabled
                                                        defaultValue={image_url} {...register("image_url")}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="email">
                                                        Provider Name
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="email"
                                                        placeholder="Enter your Image URL"
                                                        name="imageUrl"
                                                        type="text"
                                                        disabled
                                                        defaultValue={displayName} {...register("provider_Name")}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="email">
                                                        Provider Email
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="email"
                                                        placeholder="Enter your Image URL"
                                                        name="imageUrl"
                                                        type="text"
                                                        disabled
                                                        defaultValue={email} {...register("provider_email")}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="email">
                                                        Your Name
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="email"
                                                        placeholder="Enter your Image URL"
                                                        name="imageUrl"
                                                        type="text"
                                                        disabled
                                                        defaultValue={userInfo.displayName} {...register("my_name")}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="email">
                                                        Your Email
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="email"
                                                        placeholder="Enter your Image URL"
                                                        name="imageUrl"
                                                        type="text"
                                                        disabled
                                                        defaultValue={userInfo.email} {...register("my_email")}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="email">
                                                        Service Date
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="email"
                                                        placeholder="Enter your Image URL"
                                                        name="imageUrl"
                                                        type="date"
                                                        {...register("service_date")}
                                                    />
                                                </div>
                                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="email">
                                                        Your address
                                                    </label>
                                                    <input
                                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                                        id="email"
                                                        placeholder="Enter your Image URL"
                                                        name="imageUrl"
                                                        type="text"
                                                        {...register("address")}
                                                    />
                                                </div>

                                            </div>
                                            <button  onClick={() => { setOpenModal(false) }} type="submit" className="px-7 py-2 border border-gray rounded-full hover:bg-orange my-5">Purchase</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ViewDetails;