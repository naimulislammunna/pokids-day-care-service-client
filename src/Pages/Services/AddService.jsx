import axios from "axios";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";

const AddService = () => {
    const {userInfo} = useContext(AuthContext);
    const {displayName, photoURL, email} = userInfo;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.serviceName.value;
        const service_area = form.location.value;
        const price = form.price.value;
        const image_url = form.imageUrl.value;
        const description = form.description.value;

         await axios.post('http://localhost:4000/add-service', { service_name,service_area , price,description, image_url, email,  displayName, photoURL })
            .then(() => {
                toast('Post Complete')
                form.reset();
            });
    }

    return (
        <div>
            <div>
                <ToastContainer />
                <div className="home-container">
                    <div className="bg-white border rounded-lg border-cyan-800 my-10 w-[75%] mx-auto">
                        <div className="mx-20 py-10">
                            <form action="" onSubmit={handleSubmit}>
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
                                        />
                                    </div>

                                </div>

                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 my-4">
                                    <label className=" text-sm font-medium leading-none  text-cyan-700 dark:text-cyan-300" htmlFor="first_name">
                                        Description
                                    </label>
                                    <textarea
                                        className="flex h-20 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                        id="first_name"
                                        placeholder=" Description"
                                        name="description"
                                        type="text"
                                    />
                                </div>
                                <button type="submit" className="px-7 py-2 border border-gray rounded-full hover:bg-orange">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddService;