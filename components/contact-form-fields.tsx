"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "./aceternity/label";
import { Input } from "./aceternity/input";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { createContactMessage } from "@/actions/db";

export const ContactSchema = z.object({
    firstName: z.string({
        message: "First Name is required.",
    }),
    lastName: z.string({
        message: "Last Name is required.",
    }),
    email: z
        .string({
            message: "Email Address is required.",
        })
        .email({
            message: "Please enter a valid email address.",
        }),
    phoneNumber: z
        .string({
            message: "Phone Number is required.",
        })
        .min(10, {
            message: "Phone number must be 10 digits long.",
        })
        .max(10, {
            message: "Phone number must be 10 digits long.",
        }),
    message: z.string().max(500).optional(),
});

export const ContactFormFields = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
        },
    });

    const onSubmit = (values: z.infer<typeof ContactSchema>) => {
        startTransition(() => {
            try {
                createContactMessage(values);

                toast.success("Message sent successfully!");

                form.reset();
            } catch (error) {
                toast.error(error as string);
            }
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:gap-4">
                    {/* First Name Input */}
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <FieldContainer
                                        label="First Name"
                                        labelFor="firstName"
                                    >
                                        <Input
                                            {...field}
                                            id="firstName"
                                            type="text"
                                            placeholder="John"
                                        />
                                    </FieldContainer>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Last Name Input */}
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <FieldContainer
                                        label="Last Name"
                                        labelFor="lastName"
                                    >
                                        <Input
                                            {...field}
                                            id="lastName"
                                            type="text"
                                            placeholder="Doe"
                                        />
                                    </FieldContainer>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                {/* Email Address Input */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <FieldContainer
                                    label="Email Address"
                                    labelFor="email"
                                >
                                    <Input
                                        {...field}
                                        id="email"
                                        type="text"
                                        placeholder="Doe"
                                    />
                                </FieldContainer>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Phone Number Input */}
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <FieldContainer
                                    label="Phone Number"
                                    labelFor="phoneNumber"
                                >
                                    <Input
                                        {...field}
                                        id="phoneNumber"
                                        type="text"
                                        placeholder="1234567890"
                                    />
                                </FieldContainer>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Message Input */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <FieldContainer
                                    label="Your Message"
                                    labelFor="message"
                                >
                                    <Input
                                        {...field}
                                        id="message"
                                        type="text"
                                        placeholder="1234567890"
                                    />
                                </FieldContainer>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isPending} type="submit" className="w-full">
                    Send Message
                </Button>
            </form>
        </Form>
    );
};

interface Props {
    className?: string;
    labelFor: string;
    label: string;
    children: React.ReactNode;
}

const FieldContainer = ({ className, labelFor, label, children }: Props) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            <Label htmlFor={labelFor}>{label}</Label>
            {children}
        </div>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </>
    );
};
