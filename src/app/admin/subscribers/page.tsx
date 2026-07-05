import { supabase } from '@/lib/supabase';
import { Mail, Calendar, CheckCircle, XCircle } from 'lucide-react';
import UnsubscribeButton from './UnsubscribeButton';

async function getSubscribers() {
  const { data } = await supabase
    .from('blog_subscribers')
    .select('*')
    .order('subscribed_at', { ascending: false });
  return data || [];
}

export default async function AdminSubscribers() {
  const subscribers = await getSubscribers();

  return (
    <div className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <header className="mb-24 md:mb-40 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]">
            Subscribers.
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6">
            {subscribers.length} subscribers found.
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          <div className="border border-neutral-200 bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-neutral-200 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                    <th className="p-6">Email Address</th>
                    <th className="p-6">Joined</th>
                    <th className="p-6">Status</th>
                    <th className="p-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="p-6 font-mono text-sm">{sub.email}</td>
                      <td className="p-6 font-mono text-xs text-neutral-400">{new Date(sub.subscribed_at).toLocaleDateString()}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          {sub.status === 'active' ? (
                            <CheckCircle size={14} className="text-[#10B981]" />
                          ) : (
                            <XCircle size={14} className="text-neutral-400" />
                          )}
                          <span className="text-[10px] font-mono font-bold uppercase text-neutral-500">{sub.status}</span>
                        </div>
                      </td>
                      <td className="p-6 text-right">
                        <UnsubscribeButton id={sub.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}