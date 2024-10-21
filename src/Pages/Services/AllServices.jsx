import { useEffect, useState } from "react";
import AllService from "./AllService";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllServices = () => {
    const axiosPublic = useAxiosPublic();
    const [services, setServices] = useState([]);
    const [selectOpen, setSelectOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Select One");
    const [sort, setSort] = useState("Sort");
    const [count, setCount] = useState(0);
    const [itemPerPage,] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    // console.log(selectedValue);
    // console.log(sort);

    // array of options 
    const selectOptions = ['Child Care', 'Day Care', 'Night Care'];
    const sortOptions = ['Assending', 'Dessending'];

    useEffect(() => {
        const getServices = async () => {
            const { data } = await axiosPublic(`/services?page=${currentPage}&size=${itemPerPage}&search=${search}`);
            setServices(data)
        }
        getServices();
    }, [currentPage, search])

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axiosPublic(`/count-services?search=${search}`);
            setCount(data.count);
        }
        getCount();
    }, [search])

    const numberOfPage = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPage).keys()].map(page => page + 1)

    const handlePagenation = (value) => {
        setCurrentPage(value)

    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }
    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        setSearch(searchValue);

    }


    return (
        <div className="home-container my-10">
            <h3 className="text-center text-orange text-2xl font-bold my-5">All Services</h3>
            <div>
                <div className="flex justify-between gap-5 my-10">
                    {/* Select start */}
                    <div>
                        <div onClick={() => setSelectOpen(!selectOpen)} className="mx-auto flex w-72 items-center justify-between rounded-xl bg-white px-6 py-2 border">
                            <h1 className="font-medium text-gray-600">{selectedValue}</h1>
                            <svg className={`${selectOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
                        </div>
                        {/* dropdown - options  */}
                        <div className={`${selectOpen ? 'visible top-0 opacity-100' : 'hidden -top-4 opacity-0'} relative mx-auto my-4 w-72 rounded-xl py-4 border duration-300`}>
                            {selectOptions?.map((option, idx) => (
                                <div key={idx} onClick={(e) => { setSelectedValue(e.target.textContent); setSelectOpen(false); }} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* select End    */}
                    <div>
                        <form action=""  onSubmit={handleSearch}>
                            <input type="text" name="search" className="rounded-lg border border-black bg-transparent px-4 py-2 text-black ring-offset-1 duration-200 focus:outline-none focus:ring-2" placeholder="Search Service" />
                            <button type="submit" className="px-4 py-2 rounded-full bg-white lg:ml-2">Search</button>
                        </form>
                    </div>
                    <div>
                        {/* Sort start */}
                        <div>
                            <div onClick={() => setSortOpen(!sortOpen)} className="mx-auto flex w-72 items-center justify-between rounded-xl bg-white px-6 py-2 border">
                                <h1 className="font-medium text-gray-600">{sort}</h1>
                                <svg className={`${sortOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
                            </div>
                            {/* dropdown - options  */}
                            <div className={`${sortOpen ? 'visible top-0 opacity-100' : 'hidden -top-4 opacity-0'} relative mx-auto my-4 w-72 rounded-xl py-4 border duration-300`}>
                                {sortOptions?.map((option, idx) => (
                                    <div key={idx} onClick={(e) => { setSort(e.target.textContent); setSortOpen(false); }} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Sort End    */}
                    </div>
                    <div>
                        <button className="px-4 py-2 rounded-full bg-white">Reset</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    services.map(item => <AllService
                        key={item._id}
                        service={item}></AllService>)
                }
            </div>
            <div>
                <div className="flex items-center justify-center mt-8 space-x-2">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        <FaChevronLeft />
                    </button>
                    <div>
                        {
                            pages?.map(numOfPage => <button
                                key={numOfPage}
                                onClick={() => handlePagenation(numOfPage)}
                                className={`mx-1 px-4 py-2 rounded-full transform transition-all duration-300
                                    ${currentPage === numOfPage ? 'bg-[#3B9DF8] text-white scale-110 shadow-md' : 'bg-transparent text-blue-600 hover:bg-blue-100'} `}>{numOfPage}</button>)
                        }

                    </div>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === numberOfPage}
                        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllServices;