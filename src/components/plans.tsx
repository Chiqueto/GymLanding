import PlanCard from "./planCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

function Plans() {
    return (
        <section id="plans" className="flex flex-col items-center mt-20">
            <h1 className="font-impact font-bold md:text-6xl text-5xl text-zinc-50 md:px-48 text-center [text-shadow:_2px_4px_8px_rgb(198_67_8_/_75%)] stroke-main-600">Nossos planos e assinaturas</h1>

            <div className="md:flex flex-row gap-2 hidden ">
                <PlanCard title="Starter" description1="- Acesso 3x por semana" description2="- Treinos básicos sem acompanhamento personalizado" description3="- Aulas coletivas inclusas" price="R$ 70,00" variant="starter" />
                <PlanCard title="Olympia" description1="- Acesso ilimitado todos os dias" description2="- Treinos especializados com acompanhamento de personais" description3="- Avaliação física semestral" price="R$ 150,00" variant="olympia" />
                <PlanCard title="Pro" description1="- Acesso 5x por semana" description2="- Treinos especializados ajustados mensalmente" description3="-  Aulas coletivas exclusivas (spinning, funcional)" price="R$ 100,00" variant="pro" />
            </div>

            <Carousel opts={{ loop: true }} className="w-full md:hidden sm:w-[80%]">
                <CarouselContent>

                    <CarouselItem className="basis-auto">
                        <PlanCard title="Starter" description1="- Acesso 3x por semana" description2="- Treinos básicos sem acompanhamento personalizado" description3="- Aulas coletivas inclusas" price="R$ 70,00" variant="starter" />
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                        <PlanCard title="Olympia" description1="- Acesso ilimitado todos os dias" description2="- Treinos especializados com acompanhamento de personais" description3="- Avaliação física semestral" price="R$ 150,00" variant="olympia" />
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                        <PlanCard title="Pro" description1="- Acesso 5x por semana" description2="- Treinos especializados ajustados mensalmente" description3="-  Aulas coletivas exclusivas (spinning, funcional)" price="R$ 100,00" variant="pro" />
                    </CarouselItem>
                </CarouselContent >

            </Carousel >

            <h1 className="mt-20 font-impact font-bold md:text-6xl text-5xl text-zinc-50 px-48 text-center [text-shadow:_0_4px_12px_rgb(20_145_227_/_100%)] stroke-secondary-500">Também aceitamos</h1>

            <div className="border border-zinc-50 rounded-2xl p-10 mx-10 mt-10 font-impact font-bold md:px-40 px-14">
                <h2 className="md:text-4xl text-2xl text-center mb-5 text-zinc-50 stroke-secondary-500 ">Diária - R$ 15,00 </h2>
                <img src="/gympass.png" alt="GymPass" className="mb-10" />
                <img src="/totalpass.png" alt="TotalPass" />
            </div>

        </section>
    );
}

export default Plans;