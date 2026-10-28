'use client';

import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneCall,
  Cloud,
  Sliders,
  MessageSquare,
  BarChart3,
  Headphones,
  ServerOff,
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  Building2,
  User,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  ChevronRight,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';

// Recommended hosting calculation helper (NO PRICES)
function getRecommendedHosting(agents: number) {
  if (agents <= 40) {
    return {
      name: 'Starter Cloud Package',
      specs: 'High-Availability PBX Instance (2 vCPU / 4GB RAM)',
    };
  } else if (agents <= 192) {
    return {
      name: 'Business Cloud Package',
      specs: 'Dedicated PBX Cluster (4 vCPU / 8GB RAM)',
    };
  } else if (agents <= 896) {
    return {
      name: 'Enterprise Cloud Package',
      specs: 'High-Throughput PBX Cluster (8 vCPU / 16GB RAM)',
    };
  } else {
    return {
      name: 'Hyperscale Cloud Package',
      specs: 'Redundant Multi-Region PBX Cluster (16+ vCPU / 32GB+ RAM)',
    };
  }
}

export const SautiConnectOnboarding = () => {
  // Form & Journey States
  const [journeyType, setJourneyType] = useState<'quotation' | 'demo'>('quotation');
  const [activeDemoTab, setActiveDemoTab] = useState<'incoming' | 'agent' | 'queue' | 'analytics' | 'mobile'>('incoming');

  // Customer KYC Inputs
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+255 ');
  const [industry, setIndustry] = useState('SME');
  const [otherIndustry, setOtherIndustry] = useState('');

  // Demo Preferences
  const [demoDate, setDemoDate] = useState('');
  const [demoTime, setDemoTime] = useState('');
  const [commMethod, setCommMethod] = useState('Google Meet');

  // Configuration Parameters
  const [agentCount, setAgentCount] = useState<number>(25);
  const [selectedMno, setSelectedMno] = useState<string>('Vodacom');
  const [additionalComments, setAdditionalComments] = useState('');

  // Form Submission & Validation States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [leadRef, setLeadRef] = useState('');

  const rangeInputId = useId();

  const recommendedHosting = getRecommendedHosting(agentCount);

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!fullName || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }
    if (!organization || organization.trim().length < 2) {
      errs.organization = 'Please enter your company/organization name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errs.email = 'Please enter a valid business email address.';
    }

    if (!phone || phone.trim().length < 6) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (industry === 'Other' && (!otherIndustry || otherIndustry.trim().length < 2)) {
      errs.industry = 'Please specify your industry.';
    }

    if (journeyType === 'demo') {
      if (!demoDate) {
        errs.demoDate = 'Please select a preferred demo date.';
      }
      if (!demoTime) {
        errs.demoTime = 'Please select a preferred demo time.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setServerMessage('');

    const payload = {
      fullName: fullName.trim(),
      organization: organization.trim(),
      email: email.trim(),
      phone: phone.trim(),
      industry: industry === 'Other' ? otherIndustry.trim() : industry,
      requestType: journeyType,
      demoPreferences: journeyType === 'demo' ? {
        preferredDate: demoDate,
        preferredTime: demoTime,
        communicationMethod: commMethod,
      } : null,
      agentCount,
      hostingPackage: `${recommendedHosting.name} (${recommendedHosting.specs})`,
      selectedMno,
      comments: additionalComments.trim(),
    };

    try {
      const res = await fetch('/api/sauti-connect/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit onboarding request.');
      }

      setSubmitSuccess(true);
      setServerMessage(data.message || 'Onboarding request submitted successfully.');
      if (data.leadId) setLeadRef(data.leadId);
    } catch (err: any) {
      setServerMessage(err.message || 'We couldn\'t complete your request at the moment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#0B0F17] text-white font-sans pt-28 pb-32 overflow-hidden selection:bg-[#3E9C8F] selection:text-white">

      {/* Background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#3E9C8F]/15 via-blue-600/5 to-transparent blur-[120px] pointer-events-none" />

      {/* HERO SECTION / STEP 1 */}
      <section className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[#3E9C8F]" />
          <span>Sauti Connect Customer Onboarding</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.08] max-w-5xl mx-auto"
        >
          Need a Call Centre Solution <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            for Your Business?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto mt-8 leading-relaxed font-normal"
        >
          Connect your business with a professional cloud-based communication solution that combines hosted PBX, SIP Trunking, and business calling features without the need for expensive on-premise hardware.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('sauti-benefits')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#3E9C8F] hover:bg-[#328378] text-white font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(62,156,143,0.4)] flex items-center justify-center gap-3 group"
          >
            <span>Start Sauti Connect Onboarding</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('sauti-demo')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-all duration-300 border border-white/15 flex items-center justify-center gap-2"
          >
            <span>See Demo in Action</span>
          </button>
        </motion.div>
      </section>

      {/* SECTION 2: START SAUTI CONNECT & KEY BENEFITS */}
      <section id="sauti-benefits" className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-20 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#3E9C8F] uppercase mb-3">One Platform Architecture</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            One solution. One bill. One support team.
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Sauti Connect gives your business the tools to manage professional business communications through cloud-based telephony, hosted PBX and SIP connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Professional Business Number',
              desc: 'Establish instant local credibility with official MNO numbers (Vodacom, TTCL, Airtel, YAS) routed directly to your cloud PBX.',
              icon: PhoneCall,
            },
            {
              title: 'Cloud-Hosted PBX',
              desc: 'High-availability telephony infrastructure running on enterprise cloud nodes—no physical server racks required.',
              icon: Cloud,
            },
            {
              title: 'Call Queues & Smart Routing',
              desc: 'Distribute caller volume evenly across agents, configure custom IVR menu trees, overflow queues, and multi-extension transfers.',
              icon: Sliders,
            },
            {
              title: 'IVR & WhatsApp Integrations',
              desc: 'Combine voice call handling with digital messaging channels and interactive auto-attendants.',
              icon: MessageSquare,
            },
            {
              title: 'Analytics & Real-Time Monitoring',
              desc: 'Monitor live agent availability, call waiting times, call recording quality, and detailed volume analytics.',
              icon: BarChart3,
            },
            {
              title: 'Local Technical & Customer Support',
              desc: 'Dedicated 24/7 technical assistance in Tanzania to ensure peak uptime and continuous operations.',
              icon: Headphones,
            },
          ].map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-white/5 border border-white/10 hover:border-[#3E9C8F]/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3E9C8F]/20 text-[#3E9C8F] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => scrollToSection('sauti-demo')}
            className="inline-flex items-center gap-2 text-[#3E9C8F] hover:text-teal-300 font-semibold text-lg transition-colors group"
          >
            <span>See Sauti Connect in Action</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* SECTION 3: DEMO IN ACTION (INTERACTIVE PREVIEW) */}
      <section id="sauti-demo" className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-20 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-widest text-[#3E9C8F] uppercase mb-3">Interactive Demonstration</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Experience Sauti Connect in Action
          </h2>
          <p className="text-lg text-neutral-300">
            Explore how Sauti Connect manages calls, teams, and customer communication from one unified platform.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { id: 'incoming', label: 'Incoming Call & IVR' },
            { id: 'agent', label: 'Agent Extensions' },
            { id: 'queue', label: 'Call Queues & Routing' },
            { id: 'analytics', label: 'Analytics Dashboard' },
            { id: 'mobile', label: 'Mobile & Desktop App' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveDemoTab(tab.id as any)}
              className={`px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeDemoTab === tab.id
                  ? 'bg-[#3E9C8F] text-white shadow-lg shadow-[#3E9C8F]/25'
                  : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Visual Preview Box */}
        <div className="bg-[#121824] border border-white/15 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[380px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeDemoTab === 'incoming' && (
              <motion.div
                key="incoming"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-2xl text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center animate-pulse">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Active Call Processing
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3">+255 760 XXX XXX (Incoming Customer)</h3>
                  <p className="text-neutral-400 text-sm mt-1">Routed via Vodacom SIP Trunk → Cloud IVR Engine</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left font-mono text-sm space-y-2 text-neutral-300">
                  <p className="text-emerald-400">🤖 IVR Auto-Attendant: &quot;Karibu ICTPACK. Press 1 for Sales, Press 2 for Support.&quot;</p>
                  <p className="text-cyan-400">⚡ Client pressed [1] → Routing to Sales Queue #204</p>
                  <p className="text-neutral-400">📞 Assigned to Agent: Sarah (Extension 102) - Status: Connected</p>
                </div>
              </motion.div>
            )}

            {activeDemoTab === 'agent' && (
              <motion.div
                key="agent"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-3xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-white">Active Extensions & Agent Status</h3>
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-neutral-300">Live Workspace</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { ext: 'Ext 101', name: 'Juma K.', role: 'Sales Lead', status: 'Available', color: 'bg-emerald-500' },
                    { ext: 'Ext 102', name: 'Sarah M.', role: 'Customer Care', status: 'On Active Call (02:45)', color: 'bg-amber-500' },
                    { ext: 'Ext 103', name: 'David T.', role: 'Tech Support', status: 'Available', color: 'bg-emerald-500' },
                    { ext: 'Ext 104', name: 'Amina S.', role: 'Billing', status: 'Wrap-up', color: 'bg-blue-500' },
                  ].map((ag, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono text-[#3E9C8F]">{ag.ext}</span>
                        <h4 className="text-base font-semibold text-white">{ag.name}</h4>
                        <p className="text-xs text-neutral-400">{ag.role}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block w-2.5 h-2.5 rounded-full ${ag.color} mr-2`} />
                        <span className="text-xs text-neutral-300">{ag.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeDemoTab === 'queue' && (
              <motion.div
                key="queue"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-2xl text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 mx-auto flex items-center justify-center">
                  <Sliders className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Smart Call Queue & Round-Robin Routing</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-xs text-neutral-400 uppercase">Callers in Queue</p>
                    <p className="text-3xl font-bold text-cyan-400 mt-1">2</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-xs text-neutral-400 uppercase">Avg Hold Time</p>
                    <p className="text-3xl font-bold text-emerald-400 mt-1">12s</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-xs text-neutral-400 uppercase">Overflow Target</p>
                    <p className="text-base font-bold text-amber-400 mt-2">Mobile Ext #109</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeDemoTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-3xl space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Real-Time Performance Dashboard</h3>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Live Feed
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Calls Today', val: '1,284' },
                    { label: 'Answered Rate', val: '98.4%' },
                    { label: 'Avg Talk Time', val: '3m 12s' },
                    { label: 'Active Extensions', val: '32 / 32' },
                  ].map((st, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <p className="text-xs text-neutral-400 uppercase">{st.label}</p>
                      <p className="text-2xl font-bold text-white mt-1">{st.val}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeDemoTab === 'mobile' && (
              <motion.div
                key="mobile"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-xl text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Cross-Platform Softphone Access</h3>
                <p className="text-neutral-300 text-sm">
                  Agents can make and receive official business calls seamlessly from iOS, Android, macOS, or Windows browsers.
                </p>
                <div className="flex justify-center gap-3 text-xs text-neutral-400 pt-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">iOS / Android App</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">WebRTC Browser Phone</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">SIP Desktop Client</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Choice Buttons after visual demonstration */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to configure Sauti Connect for your team?</h3>
            <p className="text-neutral-400 text-sm">Choose whether you want a live guided demonstration or a custom capacity quote.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => {
                setJourneyType('demo');
                scrollToSection('onboarding-form');
              }}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                journeyType === 'demo'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Demo</span>
            </button>

            <button
              onClick={() => {
                setJourneyType('quotation');
                scrollToSection('onboarding-form');
              }}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                journeyType === 'quotation'
                  ? 'bg-[#3E9C8F] text-white shadow-lg shadow-[#3E9C8F]/30'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4, 5, 6, 7: CUSTOMER KYC & CAPACITY ESTIMATION FORM */}
      <section id="onboarding-form" className="relative max-w-[1200px] mx-auto px-6 md:px-12 py-20 border-t border-white/10">

        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#121824] border border-[#3E9C8F]/50 rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-[#3E9C8F]/20 text-[#3E9C8F] mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-emerald-300 font-medium mb-6">
              {serverMessage}
            </p>
            {leadRef && (
              <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-6 py-3 font-mono text-sm text-neutral-300 mb-8">
                Request Reference: <span className="text-white font-bold">{leadRef}</span>
              </div>
            )}
            <p className="text-neutral-400 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
              {journeyType === 'demo'
                ? 'Our technical team will review your preferred schedule and confirm your Sauti Connect demonstration session shortly.'
                : 'Our solutions architect will review your technical capacity requirements and reach out with your detailed configuration assessment.'}
            </p>
            <button
              onClick={() => {
                setSubmitSuccess(false);
                setServerMessage('');
              }}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors inline-flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Submit Another Request</span>
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">

            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#3E9C8F]">
                {journeyType === 'demo' ? 'Step 1 of 2: Schedule Demo' : 'Step 1 of 2: Solution Estimation'}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
                {journeyType === 'demo' ? 'Schedule Your Sauti Connect Demo' : 'Request Sauti Connect Quotation'}
              </h2>
              <p className="text-neutral-400 text-base mt-4">
                Provide your details below and we&apos;ll help you determine the Sauti Connect configuration that best fits your business.
              </p>
            </div>

            {/* DEMO SCHEDULE PREFERENCES (IF DEMO SELECTED) */}
            {journeyType === 'demo' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>Demo Preferences</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={demoDate}
                        onChange={(e) => setDemoDate(e.target.value)}
                        className="w-full bg-[#0B0F17] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    {errors.demoDate && <p className="text-rose-400 text-xs mt-1">{errors.demoDate}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      value={demoTime}
                      onChange={(e) => setDemoTime(e.target.value)}
                      className="w-full bg-[#0B0F17] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-400"
                    />
                    {errors.demoTime && <p className="text-rose-400 text-xs mt-1">{errors.demoTime}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-2">
                      Meeting Format
                    </label>
                    <select
                      value={commMethod}
                      onChange={(e) => setCommMethod(e.target.value)}
                      className="w-full bg-[#0B0F17] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-400"
                    >
                      <option value="Google Meet">Google Meet</option>
                      <option value="Microsoft Teams">Microsoft Teams</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Physical Meeting">Physical Meeting (Tanzania)</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CUSTOMER INFORMATION / KYC FORM */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <User className="w-5 h-5 text-[#3E9C8F]" />
                <span>Customer & Organization Details (KYC)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g., Sarah John"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#0B0F17] border border-white/15 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#3E9C8F]"
                    />
                  </div>
                  {errors.fullName && <p className="text-rose-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase mb-2">
                    Company / Organization Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g., ICTPACK Solutions Ltd"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full bg-[#0B0F17] border border-white/15 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#3E9C8F]"
                    />
                  </div>
                  {errors.organization && <p className="text-rose-400 text-xs mt-1">{errors.organization}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase mb-2">
                    Business Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="name@company.co.tz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0B0F17] border border-white/15 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#3E9C8F]"
                    />
                  </div>
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="+255 700 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0B0F17] border border-white/15 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#3E9C8F]"
                    />
                  </div>
                  {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-neutral-300 uppercase mb-2">
                    Industry Sector *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['SME', 'Manufacturing', 'Healthcare', 'Betting', 'Tourism and Hospitality', 'Other'].map((ind) => (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => setIndustry(ind)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                          industry === ind
                            ? 'bg-[#3E9C8F] text-white border-[#3E9C8F]'
                            : 'bg-[#0B0F17] border-white/15 text-neutral-300 hover:border-white/30'
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>

                  {industry === 'Other' && (
                    <div className="mt-3">
                      <input
                        type="text"
                        placeholder="Please specify your industry..."
                        value={otherIndustry}
                        onChange={(e) => setOtherIndustry(e.target.value)}
                        className="w-full bg-[#0B0F17] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#3E9C8F]"
                      />
                      {errors.industry && <p className="text-rose-400 text-xs mt-1">{errors.industry}</p>}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SOLUTION CONFIGURATION & CAPACITY AUTO-ESTIMATION */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  <span>Estimate Your Sauti Connect Requirements</span>
                </h3>
                <p className="text-neutral-400 text-xs mt-1">
                  Adjust your user capacity to automatically view recommended cloud hosting and SIP trunk configurations.
                </p>
              </div>

              {/* Number of Users Slider */}
              <div className="bg-[#0B0F17] border border-white/15 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor={rangeInputId} className="text-sm font-semibold text-white">
                    Estimated Number of Users / Call Agents
                  </label>
                  <span className="text-2xl font-bold text-[#3E9C8F] bg-[#3E9C8F]/10 px-4 py-1 rounded-lg border border-[#3E9C8F]/30">
                    {agentCount} Agents
                  </span>
                </div>

                <input
                  id={rangeInputId}
                  type="range"
                  min={16}
                  max={8192}
                  step={1}
                  value={agentCount}
                  onChange={(e) => setAgentCount(Number(e.target.value))}
                  className="w-full accent-[#3E9C8F] cursor-pointer"
                />

                <div className="flex justify-between text-xs text-neutral-400 font-mono">
                  <span>16 Users</span>
                  <span>500 Users</span>
                  <span>2,000 Users</span>
                  <span>8,192 Users</span>
                </div>
              </div>

              {/* Preferred MNO Selection */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase mb-3">
                  Preferred SIP Trunk Carrier (MNO)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { mno: 'Vodacom', desc: 'Default 30 DIDs' },
                    { mno: 'TTCL', desc: 'Default 10 DIDs' },
                    { mno: 'Airtel', desc: 'Default 100 DIDs' },
                    { mno: 'YAS', desc: 'Default 10 DIDs' },
                  ].map((item) => (
                    <button
                      key={item.mno}
                      type="button"
                      onClick={() => setSelectedMno(item.mno)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        selectedMno === item.mno
                          ? 'bg-[#3E9C8F]/15 border-[#3E9C8F] text-white'
                          : 'bg-[#0B0F17] border-white/15 text-neutral-300 hover:border-white/30'
                      }`}
                    >
                      <p className="font-bold text-base">{item.mno}</p>
                      <p className="text-xs text-neutral-400 mt-1">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase mb-2">
                  Additional Notes or Custom Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your call volume, CRM integrations, or current telephony setup..."
                  value={additionalComments}
                  onChange={(e) => setAdditionalComments(e.target.value)}
                  className="w-full bg-[#0B0F17] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#3E9C8F]"
                />
              </div>

              {/* AUTOMATIC TECHNICAL ESTIMATION SUMMARY (NO PRICES) */}
              <div className="bg-[#121824] border border-[#3E9C8F]/30 rounded-2xl p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2 text-[#3E9C8F]">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="font-bold text-lg text-white">Your Sauti Connect Technical Estimate Summary</h4>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-neutral-300">
                    <thead className="text-xs uppercase bg-white/5 text-neutral-400 border-b border-white/10">
                      <tr>
                        <th className="py-3 px-4">Requirement</th>
                        <th className="py-3 px-4">Estimated Configuration Specs</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Users / Agents Capacity</td>
                        <td className="py-3 px-4 text-emerald-400 font-bold">{agentCount} Agents</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Recommended Hosting Package</td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-white">{recommendedHosting.name}</span>
                          <span className="block text-xs text-neutral-400">{recommendedHosting.specs}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Selected SIP Trunk Carrier</td>
                        <td className="py-3 px-4 text-cyan-300 font-bold">{selectedMno} Network</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Disclaimer */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex gap-3 text-xs text-amber-200">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-400" />
                  <p className="leading-relaxed">
                    <strong>Please Note:</strong> This is an initial technical capacity estimate based on the parameters provided above. Final technical architecture, configuration requirements, and formal commercial terms will be confirmed by the Sauti Connect team following detailed assessment.
                  </p>
                </div>
              </div>
            </div>

            {/* SERVER ERROR DISPLAY */}
            {serverMessage && !submitSuccess && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm p-4 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
                <span>{serverMessage}</span>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-12 py-5 rounded-full bg-[#3E9C8F] hover:bg-[#328378] disabled:opacity-50 text-white font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(62,156,143,0.4)] inline-flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Processing Submission...</span>
                  </>
                ) : (
                  <>
                    <span>{journeyType === 'demo' ? 'Book My Demo' : 'Request My Quote'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </section>

    </div>
  );
};

export default SautiConnectOnboarding;