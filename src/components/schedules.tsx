import ScheduleCard from "./scheduleCard";

function Schedules() {
    return (
        <section className="mt-20">
            <div className="flex flex-row  justify-center items-center gap-5 ml-20 ">
                <img src="/Line 1.svg" alt="" className="mt-6" />
                <h1 className="text-center font-neon text-9xl text-main-700  [text-shadow:_4px_12px_24px_rgb(255_0_0_/_80%)]  ">Estamos abertos</h1>
                <img src="/Line 2.svg" alt="" className="mt-8" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8 my-20">
                <ScheduleCard title={"Segunda a Sexta"} schedule={"07H - 22H"} />
                <ScheduleCard title={"Sábados"} schedule={"07H - 15H"} />
                <ScheduleCard title={"Domingos"} schedule={"07H - 12H"} />


            </div>

        </section>
    );
}

export default Schedules;