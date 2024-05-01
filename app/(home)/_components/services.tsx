import homePage from "@/data/homePage.json";

import { SectionHeading } from "@/components/section-heading";
import { ServicesPromoCard } from "@/components/services-promo-card";

export const Services = () => {
    const data = homePage.services;

    return (
        <div className="space-y-8">
            <SectionHeading>
                <span dangerouslySetInnerHTML={{ __html: data.heading }}></span>
            </SectionHeading>
            <ServicesPromoCard />
        </div>
    );
};
