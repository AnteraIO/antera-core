import { supabaseAdmin } from '@/lib/supabaseServer';
import { LayoutDashboard, FileText, Users, Eye, TrendingUp } from 'lucide-react';
import Link from 'next/link';

async function getStats() {
  if (!supabaseAdmin) {
    return {
      postsCount: 0,
      publishedCount: 0,
      subCount: 0,
      totalViews: 0,
      engagementRate: 0
    };
  }

  const { count: postsCount } = await supabaseAdmin
    .from('blog_posts')
    .select('*', { count: 'exact', head: true });
  
  const { count: publishedCount } = await supabaseAdmin
    .from('blog_posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published');
  
  const { count: subCount } = await supabaseAdmin
    .from('blog_subscribers')
    .select('*', { count: 'exact', head: true });

  const { data: viewsData } = await supabaseAdmin
    .from('blog_posts')
    .select('views');
  
  const totalViews = viewsData?.reduce((acc: number, curr: any) => acc + (curr.views || 0), 0) || 0;

  const totalPostsCount = postsCount || 0;
  const currentPublishedCount = publishedCount || 0;
  const engagementRate = totalPostsCount > 0
    ? Math.round((currentPublishedCount / totalPostsCount) * 100)
    : 0;

  return { 
    postsCount: totalPostsCount,
    publishedCount: currentPublishedCount,
    subCount: subCount || 0,
    totalViews,
    engagementRate 
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <header className="mb-24 md:mb-40 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]">
            Dashboard.
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6">
            Blog metrics and content management overview.
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-neutral-200 bg-white">
            
            <div className="group p-8 md:p-12 min-h-[200px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-b lg:border-b-0 lg:border-r border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#3B82F6] flex items-center justify-center">
                  <FileText size={20} className="text-white" />
                </div>
                <span className="text-3xl font-normal tracking-tight">{stats.postsCount}</span>
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Total Posts</p>
              </div>
            </div>

            <div className="group p-8 md:p-12 min-h-[200px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-b lg:border-b-0 lg:border-r border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#10B981] flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <span className="text-3xl font-normal tracking-tight">{stats.subCount}</span>
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Subscribers</p>
              </div>
            </div>

            <div className="group p-8 md:p-12 min-h-[200px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors border-b md:border-b-0 lg:border-r border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#FA520F] flex items-center justify-center">
                  <Eye size={20} className="text-white" />
                </div>
                <span className="text-3xl font-normal tracking-tight">{stats.totalViews}</span>
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Total Views</p>
              </div>
            </div>

            <div className="group p-8 md:p-12 min-h-[200px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-[#8B5CF6] flex items-center justify-center">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <span className="text-3xl font-normal tracking-tight">{stats.engagementRate}%</span>
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Engagement Rate</p>
                <p className="text-[10px] font-mono text-neutral-400 mt-1">{stats.publishedCount} published / {stats.postsCount} total</p>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/admin/posts" className="block p-6 border border-neutral-200 bg-white text-center hover:bg-neutral-50/50 transition-colors text-sm font-medium">
            Manage Posts
          </Link>
          <Link href="/admin/subscribers" className="block p-6 border border-neutral-200 bg-white text-center hover:bg-neutral-50/50 transition-colors text-sm font-medium">
            Subscribers
          </Link>
          <Link href="/admin/broadcast" className="block p-6 border border-neutral-200 bg-white text-center hover:bg-neutral-50/50 transition-colors text-sm font-medium">
            Broadcast
          </Link>
          <Link href="/admin/posts/new" className="block p-6 border border-neutral-200 bg-[#FA520F] text-white text-center hover:bg-black transition-colors text-sm font-medium">
            New Post
          </Link>
        </div>

      </div>
    </div>
  );
}