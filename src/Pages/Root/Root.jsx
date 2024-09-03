import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";

const Root = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/CM22N9fW/bg.png')] bg-auto bg-no-repeat bg-right-top">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;