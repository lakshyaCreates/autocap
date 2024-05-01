import homePage from "@/data/homePage.json";

import { SectionHeading } from "@/components/section-heading";
import { ServicesPromoCard } from "@/components/services-promo-card";
import { LinkBtn } from "@/components/link-btn";

export const Services = () => {
    const data = homePage.services;

    return (
        <div className="space-y-8 text-start">
            <SectionHeading>
                <p
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                    className="text-center"
                />
            </SectionHeading>
            <ServicesPromoCard />
            <div className="text-center">
                <LinkBtn
                    text="Visit services page"
                    className="font-kanit font-medium uppercase"
                    blank
                    link="/services"
                />
            </div>
        </div>
    );
};
