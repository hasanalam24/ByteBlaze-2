import { Link } from "react-router-dom";


const Empty = ({ message, address, label }) => {
    return (
        <div className="min-h-[calc(100vh-284px)] gap-5 flex flex-col justify-center items-center pb-16 ">
            <p>{message}</p>

            <Link to="/blogs" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">{label}</span>
                </span>
            </Link>
        </div>
    );
};

export default Empty;