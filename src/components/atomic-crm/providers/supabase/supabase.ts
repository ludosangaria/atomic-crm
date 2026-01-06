import { createClient } from '@supabase/supabase-js'

console.log('ENV URL =', import.meta.env.VITE_SUPABASE_URL)
console.log('ENV KEY =', import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY)

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY

if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL is missing at build/runtime')
}
if (!supabaseKey) {
  throw new Error('VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY is missing at build/runtime')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
