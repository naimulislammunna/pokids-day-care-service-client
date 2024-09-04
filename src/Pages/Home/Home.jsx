import AboutUs from "../AboutUs/AboutUs";
import Specificity from "../AboutUs/Specificity";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Specificity></Specificity>
        </div>
    );
};

export default Home;