import { supabase } from './lib/supabase'
async function signUp(email: string, password: string){
    const {data, error} = await supabase.auth.signUp({email,password})
    if (error) console.error(error)
    else console.log("Signed up:", data)
}