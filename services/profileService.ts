import { supabase } from "../lib/supabase";

export const CreateNewProfile = async (username: string, bio:string) => {
    const { data: {user} } = await supabase.auth.getUser();

    if(!user) throw new Error('User not logged in');
    const {error} = await supabase.from('profiles').insert([{id:user.id, username, bio}]);

    if(error) throw error;
    return true;
}

export const getProfile = async () => {
    const {data: {user}} = await supabase.auth.getUser();
    if (!user) throw new Error('User not logged in');

    const {data, error} = await supabase.from('profiles').select('*').eq('id', user.id).single();

    if(error) throw error;
    return data;
}