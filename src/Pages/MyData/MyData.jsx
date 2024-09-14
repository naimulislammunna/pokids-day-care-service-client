import { MdDelete } from "react-icons/md";
const MyData = ({item, handleDelete}) => {
    const {_id, image_url, service_name, service_area} = item;
    return (
        <tr className="hover:bg-gray-50 bg-[#C8F1F3] border-b transition duration-300">
                <td className="py-4 px-4 flex justify-start">
                    <img src={image_url} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">{service_name}</td>
                <td className="py-4 px-6 border-b text-xl font-medium">{service_area}</td> 
                <td className="py-4 px-6 border-b">
                    <button className="px-4 py-2 rounded-full bg-white">Update</button>
                    <button onClick={() => handleDelete(_id)}  className="ml-4 hover:bg-orange px-4 py-3 rounded-full bg-white cursor-pointer text-lg"><MdDelete /></button>
                </td>
            </tr>
    );
};

export default MyData;