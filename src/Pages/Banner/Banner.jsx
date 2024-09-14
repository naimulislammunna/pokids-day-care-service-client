import { FiPhoneCall } from "react-icons/fi";
const Banner = () => {
    return (
        <div className="home-container  flex flex-col sm:flex-row gap-5 my-12">
            <div className="sm:w-3/5">
                <p className="text-gray text-sm font-bold">Play. Explore . Learn</p>
                <h1 className="text-orange text-3xl sm:text-7xl font-bold my-7 leading-tight">A safe and joyful place for your lovely children</h1>
                <div className="flex gap-3 sm:gap-7 items-center">
                    <button className=" bg-[#2F3C4C] px-5 py-3 rounded-full text-lg font-bold text-white">Enroll Your kid</button>
                    <p className="text-sm sm:text-xl font-bold flex items-center gap-2"><span className="p-3 rounded-full bg-orange"><FiPhoneCall/></span>+0980-99445</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="carousel carousel-center bg-neutral rounded-box max-w-md h-[420px] space-x-4 p-4">
                    <div className="carousel-item">
                        <img
                            src="https://i.postimg.cc/brQgC0bk/zoe-graham-HUNsd-X1-E-k-I-unsplash.jpg"
                            className="rounded-box w-full " />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.postimg.cc/MK73dwbN/ben-white-EMZx-Dosij-J4-unsplash.jpg"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.postimg.cc/yY4rmx90/annie-spratt-bxt-t-WSF-Ko-unsplash.jpg"
                            className="rounded-box" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;