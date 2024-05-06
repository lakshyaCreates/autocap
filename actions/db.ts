"use server";

import { ContactSchema } from "@/components/contact-form-fields";
import { toast } from "sonner";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

export const createContactMessage = async (
    values: z.infer<typeof ContactSchema>
) => {
    const { firstName, lastName, email, phoneNumber, message } = values;

    const existingEmail = await prisma.contactForm.findFirst({
        where: {
            email: email,
        },
    });

    if (existingEmail) {
        return toast.error("Email already exists in the recent inquires.");
    }

    await prisma?.contactForm.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneNumber,
            message: message || "",
        },
    });
};
