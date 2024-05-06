import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import homePage from "@/data/homePage.json";

export const Contact = () => {
    const data = homePage.contact;

    return (
        <div className="space-y-8 max-w-[90dvw] md:max-w-6xl flex flex-col items-center justify-center">
            <SectionHeading>
                <span dangerouslySetInnerHTML={{ __html: data.heading }} />
            </SectionHeading>
            <div className="flex flex-col lg:flex-row text-start gap-6">
                <p
                    className="max-w-lg"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                />
                <ContactForm />
            </div>
        </div>
    );
};
