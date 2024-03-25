import { RiseLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-284px)]">
            <RiseLoader
                className="text-2xl" color="#f92fd3"></RiseLoader>
        </div>
    );
};

export default Loader;