// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dpwyyryjchollnwjnccz.supabase.co"
//const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwd3l5cnlqY2hvbGxud2puY2N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNTI0MjcsImV4cCI6MjA3MTYyODQyN30.aOUlcNXwQZI_w9kdJpiLnpOmePv9_ZqD3mhbN9dIlIA"
//const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
