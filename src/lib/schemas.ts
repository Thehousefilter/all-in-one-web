import * as z from "zod";

export const leadSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    phone: z.string().min(10, "Invalid phone number"),
    location: z.string().min(5, "Please provide a more specific location"),
    vision: z.string().min(10, "Tell us a bit more about your vision"),
});

export type LeadInput = z.infer<typeof leadSchema>;
