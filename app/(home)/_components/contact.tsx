import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Separator } from "@/components/ui/separator";
import homePage from "@/data/homePage.json";
import { LocateIcon, MailCheck, PhoneCallIcon, Warehouse } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
    const data = homePage.contact;

    return (
        <div className="space-y-8 max-w-[90dvw] md:max-w-6xl flex flex-col items-center justify-center">
            <SectionHeading>
                <span dangerouslySetInnerHTML={{ __html: data.heading }} />
            </SectionHeading>
            <div className="flex flex-col lg:flex-row text-start gap-6">
                <div className="flex flex-col">
                    <p
                        className="max-w-xl font-kanit font-light border-l-2 border-neutral-600 pl-3"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                    <div className="flex flex-col space-y-2 font-kanit">
                        <h3 className="text-lg uppercase font-semibold pt-4">
                            You can also connect us at:
                        </h3>
                        <div className="flex flex-row gap-2">
                            <PhoneCallIcon className="w-5 h-5 mt-0.5 text-primary" />
                            <p>
                                <span className="text-neutral-300">(+91)</span>
                                &nbsp;704 303 8000
                            </p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <MailCheck className="w-5 h-5 mt-0.5 text-primary" />
                            <Link
                                href={"mailto:hello@autocap.in"}
                                // target="_blank"
                            >
                                <p>hello@autocap.in</p>
                            </Link>
                        </div>
                        <div className="flex flex-row gap-2 pb-2">
                            <Warehouse className="w-7 md:w-5 text-primary" />
                            <p>
                                <span className="font-semibold">
                                    6, Amarnath Estate, Naroda Dehgam Road,
                                    Canal, opp. HP Petrol Pump, nr. Kharicut,
                                </span>
                                <br />
                                Naroda, Ahmedabad,
                                <br />
                                Gujarat
                                <br />
                                <span className="text-neutral-300">
                                    (382330)
                                </span>
                            </p>
                        </div>
                        <Separator className=" bg-neutral-600" />
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};
