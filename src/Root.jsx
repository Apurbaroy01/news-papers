
import Header from "./Components/Header";
// import HomeLayout from "./Components/HomeLayout/HomeLayout";
import LeftBar from "./Components/HomeLayout/LeftBar/LeftBar";
import Navbar from "./Components/Navbar";
import Rigthbar from "./Components/Rightbar/Rigthbar";

import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className=" w-11/12 mx-auto pt-10 grid  md:grid-cols-12 gap-3">
                <div className="col-span-3" >
                    <LeftBar></LeftBar>
                </div>
                <div className="col-span-6">
                    <Outlet></Outlet>
                </div>
                <div className="col-span-3">
                    <Rigthbar></Rigthbar>
                </div>
            </div>
        </div>
    );
};

export default Root;