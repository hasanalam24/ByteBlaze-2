import Heros from "../Components/Heros";
import wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-284px)]">
            <Heros></Heros>

            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;