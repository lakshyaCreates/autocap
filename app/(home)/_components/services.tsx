import homePage from "@/data/homePage.json";

import { SectionHeading } from "@/components/section-heading";
import { ServicesPromoCard } from "@/components/services-promo-card";

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
        </div>
    );
};
