import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"

const carouselItems = [
    {
        src: "/carrosel_1.png",
        alt: "Mulher treinando"
    },
    {
        src: "/carrosel_2.png",
        alt: "Bikes"
    },
    {
        src: "/carrosel_3.png",
        alt: "Aparelhos de musculação"
    },
    {
        src: "/carrosel_4.png",
        alt: "Estante de halteres"
    },
]

function Structure() {
    return (
        <section id="structure" className="flex justify-center md:mt-20 mt-10 md:mx-20 mx-10">
            <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index} className="basis-auto">
                            <img src={item.src} alt={item.alt} className="md:max-w-[700px] max-w-[250px]" />
                        </CarouselItem>
                    ))}
                </CarouselContent >

            </Carousel >
        </section >
    );
}

export default Structure;