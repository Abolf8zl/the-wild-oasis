import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yxvrhzypeqsslbwbddji.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4dnJoenlwZXFzc2xid2JkZGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1OTU2ODksImV4cCI6MjA2OTE3MTY4OX0.Up-ms-mRiDM-1x5HGmljiLBILJdNrUGvzY2kq6OOBjU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
