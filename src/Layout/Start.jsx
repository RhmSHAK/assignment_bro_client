import { Outlet } from "react-router-dom";
import NavBer from "../Pages/NavBer/NavBer"
import Footer from "../Pages/Footer/Footer";

const Start = () => {
    return (
        <div className="space-y-5">
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Start;