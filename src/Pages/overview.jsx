import ChartCam from "../Components/Chart/Chartcam";
import ChartGraph from "../Components/Chart/Chartgraph";
import ChartBar from "../Components/Chart/Chartbar";

export const Overview = () => {
    return (
        <>
            <div className="text-white py-8">
                <h1 className="text-6xl font-bold text-center py-5">Vue d&apos;ensemble</h1>
            </div>
            <div className="flex flex-col items-center gap-3 pt-5">
                <h2 className="text-4xl font-bold text-center py-5 text-white">Quelques graphiques</h2>
                <div className="space-x-4 text-lg text-black  ">
                    <a href="#nouveaux-clients" className="bg-amber-50 rounded-2xl px-2 py-1">Voir les nouveaux clients</a>
                    <a href="#nouveaux-clients" className="bg-amber-50 rounded-2xl px-2 py-1">Voir les nouveaux clients</a>
                </div>
            </div>
            <div className="md:flex md:justify-around px-5 flex flex-col items-center gap-10 min-h-[400px] py-10">
                <h2 className="text-2xl font-bold text-center py-5 text-white">Ventes du mois de mai</h2>
                <ChartGraph />
            </div>
            <div className="md:flex md:justify-around px-5 flex flex-col items-center gap-10 min-h-[400px] py-30" id="nouveaux-clients">
                <h2 className="text-2xl font-bold text-center py-5 text-white">Nouveaux clients sur les 8 dernières semaines</h2>
                <ChartBar />
            </div>
            <ChartCam />
        </>
    )
};

export default Overview
