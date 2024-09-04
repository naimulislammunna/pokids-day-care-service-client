import ben from '../../assets/ben-white-EMZxDosijJ4-unsplash.jpg'
const AboutUs = () => {
    return (
        <div className="home-container flex gap-10">
            <div className='w-1/2 flex justify-center items-center'>
                <img src={ben} alt="" className='w-[75%]'/>
            </div>
            <div className='w-1/2'>
                <p className="text-gray text-sm font-bold">About Us</p>
                <h1 className="text-orange text-5xl font-bold my-7 leading-tight">We are here to help parents raise happy and healthy children</h1>
                <p className="text-slate-400 font-semibold my-5 leading-5">Aliquam rhoncus mauris, convallis volutpat velit bibendum dui duis ut vulputate amet, <br /> ac ipsum nisl convallis ut.
                    Pulvinar ultrices porta mattis quis lobortis est facilisis purus nunc, <br /> sed semper enim dictum sed donec condimentum sodales sed non vel malesuada morbi arcu justo, <br /> pretium sagittis hac nisi amet, fermentum nunc.</p>
                <button className="px-7 py-2 border border-gray rounded-full hover:bg-orange my-5 font-bold flex-grow">know More About Us</button>
            </div>
        </div>
    );
};

export default AboutUs;