
const BookedData = ({item}) => {
    const {image_url, service_name, service_area, provider_Name} = item.data;

    return (
        <tr className="hover:bg-gray-50 bg-[#C8F1F3] border-b transition duration-300">
                <td className="py-4 px-4 flex justify-start">
                    <img src={image_url} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">{service_name}</td>
                <td className="py-4 px-6 border-b text-xl font-medium">{service_area}</td> 
                <td className="py-4 px-6 border-b">
                    {provider_Name}
                </td>
            </tr>
    );
};

export default BookedData;