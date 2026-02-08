import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a dummy client if keys are missing to prevent build-time crashes
// In production, these must be set in the deployment environment
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null as any;

export type Lead = {
    id?: string;
    name: string;
    email?: string;
    phone: string;
    location: string;
    vision: string;
    status: "new" | "contacted" | "quoted" | "closed" | "lost";
    created_at?: string;
};

export async function submitLead(lead: Lead) {
    if (!supabase) {
        console.error("Supabase client not initialized. Check environment variables.");
        throw new Error("Configuration missing");
    }
    const { data, error } = await supabase
        .from("leads")
        .insert([lead])
        .select();

    if (error) throw error;
    return data;
}
