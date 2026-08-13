import { supabaseAdmin } from '@/lib/supabaseServer';
import { FileText, Users, Eye, TrendingUp, Plus, BookOpen, Mail, Send } from 'lucide-react';
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
    <div className="bg-[#FAFAF8] text-black min-h-screen pt-16 md:pt-20 lg:pt-24 selection:bg-[#FA520F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        
        <header className="mb-24 md:mb-40 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.02em] leading-[1.1]">
            Dashboard.
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6 font-light">
            Blog metrics and content management overview.
          </p>
        </header>

        {/* Stats Grid - Antera Style */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-[#F5F5F5] p-6 md:p-8 min-h-[150px] flex flex-col justify-between group hover:bg-[#EAEAEA] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-[#3B82F6] flex items-center justify-center">
                  <FileText size={16} className="text-white" />
                </div>
                <span className="text-2xl md:text-3xl font-normal tracking-tight text-black group-hover:text-[#FA520F] transition-colors">{stats.postsCount}</span>
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">Total Posts</p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] p-6 md:p-8 min-h-[150px] flex flex-col justify-between group hover:bg-[#EAEAEA] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-[#10B981] flex items-center justify-center">
                  <Users size={16} className="text-white" />
                </div>
                <span className="text-2xl md:text-3xl font-normal tracking-tight text-black group-hover:text-[#FA520F] transition-colors">{stats.subCount}</span>
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">Subscribers</p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] p-6 md:p-8 min-h-[150px] flex flex-col justify-between group hover:bg-[#EAEAEA] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-[#FA520F] flex items-center justify-center">
                  <Eye size={16} className="text-white" />
                </div>
                <span className="text-2xl md:text-3xl font-normal tracking-tight text-black group-hover:text-[#FA520F] transition-colors">{stats.totalViews}</span>
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">Total Views</p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] p-6 md:p-8 min-h-[150px] flex flex-col justify-between group hover:bg-[#EAEAEA] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 bg-[#8B5CF6] flex items-center justify-center">
                  <TrendingUp size={16} className="text-white" />
                </div>
                <span className="text-2xl md:text-3xl font-normal tracking-tight text-black group-hover:text-[#FA520F] transition-colors">{stats.engagementRate}%</span>
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">Engagement Rate</p>
                <p className="text-[9px] font-mono text-neutral-400 mt-1">{stats.publishedCount} published / {stats.postsCount} total</p>
              </div>
            </div>

          </div>
        </div>

        {/* Action Links - Small Antera Style */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link 
            href="/admin/posts" 
            className="bg-[#F5F5F5] px-4 py-3 flex items-center justify-center gap-2 hover:bg-[#EAEAEA] transition-colors text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-[#FA520F]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Manage Posts
          </Link>
          <Link 
            href="/admin/subscribers" 
            className="bg-[#F5F5F5] px-4 py-3 flex items-center justify-center gap-2 hover:bg-[#EAEAEA] transition-colors text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-[#FA520F]"
          >
            <Users className="w-3.5 h-3.5" />
            Subscribers
          </Link>
          <Link 
            href="/admin/broadcast" 
            className="bg-[#F5F5F5] px-4 py-3 flex items-center justify-center gap-2 hover:bg-[#EAEAEA] transition-colors text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-[#FA520F]"
          >
            <Send className="w-3.5 h-3.5" />
            Broadcast
          </Link>
          <Link 
            href="/admin/posts/new" 
            className="bg-[#FA520F] px-4 py-3 flex items-center justify-center gap-2 hover:bg-black transition-colors text-xs font-mono font-bold uppercase tracking-wider text-white"
          >
            <Plus className="w-3.5 h-3.5" />
            New Post
          </Link>
        </div>

      </div>
    </div>
  );
}