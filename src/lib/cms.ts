import { createClient } from "@supabase/supabase-js";

// Public read-only CMS access; this client never persists an auth session.
export const cms = createClient(
  "https://uzdjwpkgldzhnoxjeyrw.supabase.co",
  "sb_publishable_ifsg2zxajGqu19GsJ2X4RQ_KHBHGIvi",
  { auth: { persistSession: false } },
);