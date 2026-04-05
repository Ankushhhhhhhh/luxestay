import { createClient } from '@supabase/supabase-js';

// These variables are injected from the Secrets panel in AI Studio
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

// Fallback to prevent crash if keys are missing
const finalUrl = supabaseUrl || 'https://placeholder.supabase.co';
const finalKey = supabaseAnonKey || 'placeholder';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Please add SUPABASE_URL and SUPABASE_ANON_KEY to your Secrets panel.');
}

export const supabase = createClient(finalUrl, finalKey);
