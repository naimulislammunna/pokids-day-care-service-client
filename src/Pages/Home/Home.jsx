import AboutUs from "../AboutUs/AboutUs";
import Specificity from "../AboutUs/Specificity";
import Banner from "../Banner/Banner";
import PopulerServices from "../Services/PopulerServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopulerServices></PopulerServices>
            <AboutUs></AboutUs>
            <Specificity></Specificity>
        </div>
    );
};

export default Home;