import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rudqqzwhtzbmentxhxfj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1ZHFxendodHpibWVudHhoeGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NTg5MTMsImV4cCI6MjA0NTQzNDkxM30.mTr3US9hbMTO0PgFxpSP41UYlXt61-doiaO9akncr4c";
export const supabase = createClient(supabaseUrl, supabaseKey);
