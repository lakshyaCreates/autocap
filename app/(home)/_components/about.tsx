import { LinkBtn } from "@/components/link-btn";
import {
    SectionHeading,
    SectionHeadingHighlight,
} from "@/components/section-heading";
import { Separator } from "@/components/ui/separator";

import homePage from "@/data/homePage.json";
import Image from "next/image";

export const About = () => {
    const data = homePage.about;

    return (
        <div className="w-full space-y-10">
            <SectionHeading>
                <SectionHeadingHighlight>
                    {data.highlight}
                </SectionHeadingHighlight>
                &nbsp;
                {data.heading}
            </SectionHeading>
            <div className="w-full xl:w-full flex flex-col xl:flex-row xl:gap-12 xl:px-12 items-center xl:items-start justify-center space-y-8 xl:space-y-0 px-10 lg:mx-0">
                <div className="xl:text-start">
                    {/* Adjective Title */}
                    <SectionHeading className={"text-3xl lg:text-5xl"}>
                        <span
                            dangerouslySetInnerHTML={{ __html: data.subTitle }}
                        />
                    </SectionHeading>
                    {/* Main Title */}
                    <SectionHeading className="text-4xl lg:text-6xl">
                        <p dangerouslySetInnerHTML={{ __html: data.title }} />
                    </SectionHeading>
                    <Separator className="bg-neutral-500 mt-4" />
                    {/* About Description */}
                    <div
                        dangerouslySetInnerHTML={{ __html: data.description }}
                        className="mt-3 text-neutral-300 text-justify space-y-4"
                    />
                    <LinkBtn
                        text={"Read More"}
                        link="/about"
                        className="-ml-1 mt-2 uppercase font-kanit font-medium px-0"
                    />
                </div>
                <Image
                    width={1800}
                    height={1800}
                    src={data.image}
                    alt="Thar-01"
                    className="rounded-sm max-w-[95vw] md:max-w-xl"
                />
            </div>
        </div>
    );
};
