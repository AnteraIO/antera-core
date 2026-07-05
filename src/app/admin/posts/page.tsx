import { supabaseAdmin } from '@/lib/supabaseServer';
import { Edit2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import DeletePostButton from '@/components/admin/DeletePostButton';

export const dynamic = 'force-dynamic';

async function getPosts() {
  const { data } = await supabaseAdmin
    .from('blog_posts')
    .select('id, title, status, created_at, views, slug')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function AdminPostsList() {
  const posts = await getPosts();

  return (
    <div className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <header className="mb-24 md:mb-40 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]">
            Manage <span className="text-[#FA520F]">Posts.</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6">
            {posts.length} posts found.
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <div className="border border-neutral-200 bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-neutral-200 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                    <th className="p-6">Post Title</th>
                    <th className="p-6">Status</th>
                    <th className="p-6">Views</th>
                    <th className="p-6">Date</th>
                    <th className="p-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="p-6 font-medium text-sm">{post.title}</td>
                      <td className="p-6">
                        <span className={`text-[10px] font-mono font-bold uppercase px-2 py-1 border ${post.status === 'published' ? 'bg-[#FAFAF8] text-black border-neutral-200' : 'bg-neutral-100 text-neutral-500 border-neutral-200'}`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="p-6 font-mono text-sm">{post.views || 0}</td>
                      <td className="p-6 font-mono text-xs text-neutral-400">{new Date(post.created_at).toLocaleDateString()}</td>
                      <td className="p-6 text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/blog/${post.slug}`} target="_blank" className="p-2 border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-colors">
                            <ExternalLink size={14} />
                          </Link>
                          <Link href={`/admin/posts/edit/${post.id}`} className="p-2 border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-colors">
                            <Edit2 size={14} />
                          </Link>
                          <DeletePostButton postId={post.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link href="/admin/posts/new" className="inline-block bg-black text-white px-8 py-4 text-sm font-medium hover:bg-[#FA520F] transition-colors">
              Create New
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}