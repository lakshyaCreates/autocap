import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
    return (
        <div className="flex flex-row  items-start pt-10 pb-8 justify-evenly border-t-2 border-neutral-800 font-kanit w-[100dvw]">
            <div className="flex flex-col lg:flex-row max-w-[90dvw] mx-auto gap-6 items-center lg:items-start justify-center lg:justify-start ">
                <div className="flex-1 ">
                    <Image
                        src="/logo-transparent.png"
                        alt="logo"
                        width={250}
                        height={250}
                    />
                    <div>
                        <p className="text-muted-foreground">
                            {`AutoCap Car Detailing Studio specializes in premium
                    car paint protection services, including ceramic
                    coatings and paint protection films. Our meticulous
                    detailing processes ensure your vehicle's paint
                    remains flawless, enhancing its appearance and
                    durability. Discover the ultimate in automotive
                    paint protection with AutoCap`}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between space-y-4 ">
                    <div className="grid grid-cols-2 lg:flex lg:flex-row gap-6">
                        <div className={"flex flex-col w-full mt-6"}>
                            <h1
                                className={
                                    "text-lg font-medium uppercase w-fit"
                                }
                            >
                                Information
                                <Separator className="bg-neutral-600 mb-2" />
                            </h1>
                            <ul className="*:text-neutral-300 hover:*:text-primary *:transition-colors *:duration-300">
                                <li>About Us</li>
                                <li>Recent Projects</li>
                                <li>All Blogs</li>
                            </ul>
                        </div>
                        <div className={"flex flex-col w-full mt-6 "}>
                            <h1
                                className={
                                    "text-lg font-medium uppercase w-fit"
                                }
                            >
                                Services
                                <Separator className="bg-neutral-600 mb-2" />
                            </h1>
                            <ul className="*:text-neutral-300 hover:*:text-primary *:transition-colors *:duration-300">
                                <li>Ceramic Coating</li>
                                <li>Paint Protection</li>
                                <li>Car Detailing</li>
                            </ul>
                        </div>
                        <div className={"flex flex-col w-full mt-6"}>
                            <h1
                                className={
                                    "text-lg font-medium uppercase w-fit"
                                }
                            >
                                Support
                                <Separator className="bg-neutral-600 mb-2" />
                            </h1>
                            <ul className="*:text-neutral-300 hover:*:text-primary *:transition-colors *:duration-300">
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        <div className={"flex flex-col w-full mt-6"}>
                            <h1
                                className={
                                    "text-lg font-medium uppercase w-fit"
                                }
                            >
                                Contact
                                <Separator className="bg-neutral-600 mb-2" />
                            </h1>
                            <ul className="*:text-neutral-300 hover:*:text-primary *:transition-colors *:duration-300">
                                <li>Inquiry Form</li>
                                <li>Locate Studio</li>
                                <li>Email us</li>
                            </ul>
                        </div>
                    </div>
                    <Separator />
                    <div className="flex flex-row gap-6 text-muted-foreground items-center justify-center pt-2">
                        <Instagram />
                        <Linkedin />
                        <Facebook />
                        <Twitter />
                    </div>
                </div>
            </div>
        </div>
    );
};
