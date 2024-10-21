const Specificity = () => {
    return (
        <div className='home-container my-32'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-white border border-orange rounded-xl'>
                    <img src='https://i.postimg.cc/j2B5Jnv1/curious-girl-with-pencil-watching-1.jpg' alt="" className='rounded-xl -mt-14 mb-7 pr-7 w-full'/>
                    <div className='p-7'>
                    <h3 className='text-gray text-2xl font-bold'>Infant</h3>
                    <p className='text-slate-400 font-semibold my-3'>
                        Blandit auctor felis habitasse aliquet est potenti ut urna eget orci pellentesque commodo vitae in sem</p>
                    <p className='text-orange font-bold'>Learn More</p>
                    </div>
                </div>
                <div className='bg-white border border-orange rounded-lg p-7'>
                    <img src='https://i.postimg.cc/LsmsfpBm/children-holding-hand-group.jpg' alt=""  className='rounded-xl -mt-14 mb-7 -ml-8 '/>
                    <h3 className='text-gray text-2xl font-bold'>Class</h3>
                    <p className='text-slate-400 font-semibold my-3'>
                        Blandit auctor felis habitasse aliquet est potenti ut urna eget orci pellentesque commodo vitae in sem</p>
                    <p className='text-orange font-bold'>Learn More</p>
                </div>
                <div className='bg-white border border-orange rounded-lg p-7'>
                    <img src='https://i.postimg.cc/nhbrF7Xj/blonde-girl-looking-boy-playing.jpg' alt=""  className='rounded-xl -mt-14 mb-7 -ml-8'/>
                    <h3 className='text-gray text-2xl font-bold'>Enjoy</h3>
                    <p className='text-slate-400 font-semibold my-3'>
                        Blandit auctor felis habitasse aliquet est potenti ut urna eget orci pellentesque commodo vitae in sem</p>
                    <p className='text-orange font-bold'>Learn More</p>
                </div>
            </div>
        </div>
    );
};

export default Specificity;