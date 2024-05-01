import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { LinkBtn } from "@/components/link-btn";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import homePage from "@/data/homePage.json";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

export const Testimonials = () => {
    const data = homePage.testimonials;
    const testimonials = data.cards;

    return (
        <div className="space-y-12 max-w-[95dvw] md:max-w-screen-md lg:max-w-screenlg xl:max-w-screen-xl overflow-hidden">
            <SectionHeading>
                <span
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                    className="text-[3rem] lg:text-7xl"
                />
            </SectionHeading>
            <div className="text-start">
                <InfiniteMovingCards
                    testimonials={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <LinkBtn
                text="View all reviews on google maps"
                className="font-kanit font-medium uppercase"
                blank
                link="https://www.google.com/maps/place/Autocap+Car+Detailing+Studio/@23.0791293,72.6652191,17z/data=!4m8!3m7!1s0x395e8121db885a7f:0xb218d8173c334ede!8m2!3d23.0791244!4d72.667794!9m1!1b1!16s%2Fg%2F11sdn1gv4x?entry=ttu"
            />
        </div>
    );
};
