import Chartcam from "../Components/Chart/Chartcam";
import ChartGraph from "../Components/Chart/Chartgraph";

export const Overview = () => {
    return (
        <>
            <div className="text-white">
                <h1 className="text-4xl font-bold text-center py-5">Vue d&apos;ensemble</h1>
            </div>
            <h1 className="text-4xl font-bold text-center py-5 text-white">Ventes premier semestre 2024</h1>
            <div className="md:flex md:justify-around px-5 grid grid-cols-1 gap-10">
                <Chartcam />

                <ChartGraph />
            </div>
        </>
    )
};

export default Overview
