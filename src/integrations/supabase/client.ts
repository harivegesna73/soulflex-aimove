// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qkbytovotavvfngfiqnv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrYnl0b3ZvdGF2dmZuZ2ZpcW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMTQyNDQsImV4cCI6MjA1NDU5MDI0NH0.obfKmNOhN7Nnf5OOcJ6XXlvFCosAHxrdP3OjgqBxytY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);