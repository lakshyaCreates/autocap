"use client";
import { ContactFormFields } from "./contact-form-fields";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

export const ContactForm = () => {
    return (
        <div className="max-w-lg w-full font-kanit">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-medium">
                        Inquiry Details
                    </CardTitle>
                    <CardDescription>
                        Fill this form so that we can get back to you as soon as
                        possible with ease
                    </CardDescription>
                </CardHeader>
                <Separator />
                <CardContent className="py-6">
                    <ContactFormFields />
                </CardContent>
            </Card>
        </div>
    );
};
