import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import homePage from "@/data/homePage.json";

export const Contact = () => {
    const data = homePage.contact;

    return (
        <div className="space-y-8 max-w-6xl">
            <SectionHeading>
                <span dangerouslySetInnerHTML={{ __html: data.heading }} />
            </SectionHeading>
            <div className="flex flex-col lg:flex-row text-center lg:text-start">
                <p
                    className="max-w-lg"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                />
                <ContactForm />
            </div>
        </div>
    );
};
