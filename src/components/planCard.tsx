import { tv } from 'tailwind-variants';

interface PlanCardProps {
    title: string,
    description1: string,
    description2: string,
    description3: string,
    price: string
    variant: "olympia" | "pro" | "starter"
}

const cardVariants = tv({
    base: "border rounded-2xl p-10 mt-10 font-impact font-bold w-96",
    variants: {
        color: {
            olympia: "border-main-700",
            pro: "border-secondary-500 mt-24",
            starter: "border-zinc-50 mt-48"
        }
    }
})

const titleVariants = tv({
    base: "text-4xl text-center mb-4",
    variants: {
        color: {
            olympia: "text-main-700",
            pro: "text-secondary-500",
            starter: "text-zinc-50"
        }
    }
})

const priceVariants = tv({
    base: "font-poppins text-4xl text-zinc-50 text-center mt-6",
    variants: {
        color: {
            olympia: "[text-shadow:_0_4px_12px_rgb(198_67_8_/_100%)] stroke-main-600",
            pro: "[text-shadow:_0_4px_12px_rgb(20_145_227_/_100%)] stroke-secondary-500",
            starter: "[text-shadow:_0_4px_12px_rgb(255_255_255_/_50%)] stroke-zinc-50",
        }
    }
})

function PlanCard({ title, description1, description2, description3, price, variant }: PlanCardProps) {
    return (
        <div>
            <div className={cardVariants({ color: variant })}>
                <h2 className={titleVariants({ color: variant })}>{title}</h2>
                <p className="text-zinc-50 text-2xl mb-8">{description1}</p>
                <p className="text-zinc-50 text-2xl mb-8">{description2}</p>
                <p className="text-zinc-50 text-2xl mb-8">{description3}</p>
                <p className={priceVariants({ color: variant })}>{price}</p>
            </div>
        </div>

    );
}

export default PlanCard;