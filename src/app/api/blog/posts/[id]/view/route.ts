import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = (supabaseUrl && supabaseServiceRoleKey)
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json({ error: 'Supabase client not initialized' }, { status: 500 });
    }

    const { id } = await params;

    // Increment the views column by 1 using Supabase's rpc or direct update
    // Using increment logic
    const { data, error } = await supabaseAdmin.rpc('increment_post_views', { post_id: id });

    if (error) {
        // Fallback if RPC doesn't exist
        const { data: post, error: fetchError } = await supabaseAdmin
            .from('blog_posts')
            .select('views')
            .eq('id', id)
            .single();

        if (fetchError) throw fetchError;

        const { error: updateError } = await supabaseAdmin
            .from('blog_posts')
            .update({ views: (post.views || 0) + 1 })
            .eq('id', id);

        if (updateError) throw updateError;
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('View increment error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
