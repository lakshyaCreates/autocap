import { Contact } from "@/app/(home)/_components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
};

export default function ContactPage() {
    return (
        <div className="flex items-center justify-center h-full py-12">
            <Contact />
        </div>
    );
}
