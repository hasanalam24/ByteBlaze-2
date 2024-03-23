import Heros from "../Components/Heros";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-284px)]">
            <Heros></Heros>
        </div>
    );
};

export default Home;