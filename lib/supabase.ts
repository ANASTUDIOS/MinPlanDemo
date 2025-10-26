import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://jkyjbosttbllawioowei.supabase.co";
const supabasekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpreWpib3N0dGJsbGF3aW9vd2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNDgxNDIsImV4cCI6MjA3NjkyNDE0Mn0.bA41e32_B0INI3234IHs1fqEIW6q5RO96htWymDkRJM"
export const supabase = createClient(supabaseUrl, supabasekey)