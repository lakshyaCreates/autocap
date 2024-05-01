import { LinkBtn } from "@/components/link-btn";
import { SectionHeading } from "@/components/section-heading";

import homePage from "@/data/homePage.json";

export const BrandPromotion = () => {
    const data = homePage.brandPromotion;

    return (
        <div className="space-y-8">
            <SectionHeading className="">
                <span
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                    className="hidden md:block"
                />
                <span
                    dangerouslySetInnerHTML={{ __html: data.mobileHeading }}
                    className="block md:hidden"
                />
            </SectionHeading>
            <div className="aspect-video flex items-center justify-center pb-5">
                <iframe
                    className="h-full w-[85dvw] lg:max-w-6xl rounded-lg"
                    src={`https://www.youtube.com/embed/${data.videoId}`}
                    width="100%"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    autoFocus
                    allowFullScreen
                ></iframe>
            </div>
            <LinkBtn
                text="Visit our youtube channel"
                link="https://www.youtube.com/channel/UCDfHXkFZI5TmAotUHPyE3ZA"
                blank
                className="font-kanit font-medium uppercase"
            />
        </div>
    );
};
