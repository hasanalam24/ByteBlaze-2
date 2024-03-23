import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            {/* packed */}
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;