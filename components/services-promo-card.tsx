"use client";

import servicesPage from "@/data/servicesPage.json";

import { BackgroundGradient } from "./aceternity/background-gradient";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

export const ServicesPromoCard = () => {
    const data = servicesPage.services.card;

    return (
        <div className="flex flex-col space-y-6 items-center justify-center mx-4 md:mx-0 lg:grid grid-cols-2 lg:gap-6 lg:space-y-0">
            {data.map((service) => (
                <div className="max-w-sm md:max-w-lg" key={service.id}>
                    <BackgroundGradient>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-kanit text-primary text-5xl underline underline-offset-4">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <Separator />
                            <CardContent className="space-y-4 pt-3">
                                <CardDescription className="text-neutral-200 font-kanit font-light text-base">
                                    {service.description}
                                </CardDescription>
                                <div className="max-w-lg">
                                    <video
                                        autoPlay
                                        autoFocus
                                        loop
                                        muted
                                        src={service.videoUrl}
                                        className="rounded-sm"
                                    ></video>
                                </div>
                            </CardContent>
                        </Card>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
    );
};
