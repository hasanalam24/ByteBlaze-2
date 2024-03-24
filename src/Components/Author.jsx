import { useLoaderData } from "react-router-dom";


const Author = () => {
    const authorInfo = useLoaderData()
    return (
        <div>
            <h1>{authorInfo.user.name}</h1>
        </div>
    );
};

export default Author;