import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/CM22N9fW/bg.png')] bg-auto bg-no-repeat bg-right-top">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;