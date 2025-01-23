interface ScheduleCardProps {
    title: string
    schedule: string
}

function ScheduleCard({ title, schedule }: ScheduleCardProps) {
    return (

        <div className="flex flex-row justify-center items-center">
            <div className=" bg-background z-10 px-10  absolute mb-28"> <p className=" text-zinc-50 text-4xl font-bold">{title}</p> </div>
            <div className="border border-zinc-50 px-48 rounded-3xl py-8">
                <p className="text-main-700 font-body text-4xl font-bold ">{schedule}</p>
            </div>
        </div>
    );
}

export default ScheduleCard;