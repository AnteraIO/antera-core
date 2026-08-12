'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ChevronDown, Terminal, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAnteraResponseStream } from '@/lib/deepseek';

type Msg = { role: 'user' | 'model'; text: string; time: string };

const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// Clean markdown - removes ALL markdown formatting while preserving table structure
const cleanMarkdown = (text: string): string => {
  if (!text) return text;

  let cleaned = text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[-*_]{3,}\s*$/gm, '')
    .replace(/^>\s*/gm, '')
    .replace(/[—–]/g, '-')
    .replace(/\s{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return cleaned;
};

// Console Loading cursor
const TypingDots = () => (
  <div className="flex items-center gap-[4px] px-1 py-0.5 text-neutral-400 font-mono text-[10px]">
    <span>FETCHING RESPONSE DATA</span>
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ repeat: Infinity, duration: 1.0, ease: 'steps(2)' }}
    >
      ...
    </motion.span>
  </div>
);

// Table renderer component
const TableRenderer = ({ text }: { text: string }) => {
  if (!text.includes('|') || !text.includes('-')) {
    return <div className="whitespace-pre-wrap break-words">{text}</div>;
  }

  const lines = text.split('\n');
  const tables: any[] = [];
  let currentTable: any = null;
  let currentHeaders: string[] = [];
  let currentRows: string[][] = [];
  let nonTableText: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.includes('|')) {
      const cells = line.split('|').filter(cell => cell.trim() !== '');
      const isSeparator = cells.every(cell => cell.trim().match(/^[-:]+$/));
      
      if (isSeparator) {
        continue;
      }
      
      if (!currentTable) {
        currentHeaders = cells.map(c => c.trim());
        currentTable = { headers: currentHeaders, rows: [] };
      } else {
        currentRows.push(cells.map(c => c.trim()));
      }
    } else {
      if (currentTable && currentRows.length > 0) {
        currentTable.rows = currentRows;
        tables.push(currentTable);
        currentTable = null;
        currentHeaders = [];
        currentRows = [];
      }
      if (line) {
        nonTableText.push(line);
      }
    }
  }

  if (currentTable && currentRows.length > 0) {
    currentTable.rows = currentRows;
    tables.push(currentTable);
  }

  return (
    <div className="whitespace-pre-wrap break-words">
      {nonTableText.length > 0 && (
        <div className="mb-3">{nonTableText.join('\n')}</div>
      )}
      
      {tables.map((table, idx) => (
        <div key={idx} className="my-3 overflow-x-auto border border-neutral-800">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-neutral-900 border-b border-neutral-800">
                {table.headers.map((header: string, hIdx: number) => (
                  <th key={hIdx} className="px-4 py-2 text-left text-[9px] font-mono font-semibold tracking-wider text-neutral-400">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900 bg-black">
              {table.rows.map((row: string[], rIdx: number) => (
                <tr key={rIdx}>
                  {row.map((cell: string, cIdx: number) => (
                    <td key={cIdx} className="px-4 py-2 text-[10px] font-mono text-neutral-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

// Message bubble
const Bubble = ({ msg, isLast, isStreaming }: { msg: Msg; isLast: boolean; isStreaming?: boolean }) => {
  const isUser = msg.role === 'user';
  const displayText = !isUser ? cleanMarkdown(msg.text) : msg.text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-1 border-b border-neutral-900 pb-4"
    >
      <div className="flex items-center justify-between text-[8px] font-mono text-neutral-500 tracking-wider">
        <span>{isUser ? '[USER_QUERY]' : '[AIP_MODEL_OUTPUT]'}</span>
        <span>{msg.time}</span>
      </div>

      <div className={cn(
        'text-xs font-mono tracking-wide leading-relaxed p-3 border',
        isUser
          ? 'bg-[#120803] border-[#FA520F]/30 text-neutral-200'
          : 'bg-black border-neutral-800 text-neutral-300'
      )}>
        <div className="w-full">
          {isUser ? (
            <div className="whitespace-pre-wrap break-words">{displayText}</div>
          ) : (
            <TableRenderer text={displayText} />
          )}
          {isStreaming && isLast && !isUser && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block ml-1 text-[#FA520F]"
            >
              _
            </motion.span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const quickPrompts = [
  { label: 'Integrate custom database models' },
  { label: 'Audit legacy application security' },
  { label: 'Set up high-availability cloud cluster' },
  { label: 'Optimize operations data streams' },
];

const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [clockTime, setClockTime] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const tick = () => setClockTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading, streamingText]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 500);
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || isLoading) return;
    setInput('');

    const userMsg: Msg = { role: 'user', text: msg, time: getTime() };
    const currentMessages = [...messages, userMsg];
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    setStreamingText('');

    try {
      const apiHistoryPayload = currentMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      let fullResponse = '';
      
      await getAnteraResponseStream(apiHistoryPayload, (chunk: string) => {
        fullResponse += chunk;
        setStreamingText(fullResponse);
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      });

      if (fullResponse) {
        const cleanedResponse = cleanMarkdown(fullResponse);
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: cleanedResponse, 
          time: getTime() 
        }]);
      }
      
      setStreamingText('');
      setIsLoading(false);
      
    } catch (err) {
      console.error("AIP Terminal Error:", err);
      const errorMsg = 'SYSTEM RE-CALIBRATION UNDERWAY. RETRY COMMAND SEQUENCE.';
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: errorMsg, 
        time: getTime() 
      }]);
      setIsLoading(false);
      setStreamingText('');
    }
  };

  return (
    <>
      {/* Stark Terminal FAB Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="fab"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 px-5 py-3 rounded-none shadow-2xl flex items-center gap-2 bg-[#FA520F] border border-[#FA520F] text-white font-mono text-[10px] tracking-[0.2em] uppercase font-semibold"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Open AIP Terminal</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* AIP Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-0 right-0 left-0 md:bottom-8 md:right-8 md:left-auto z-50 flex flex-col overflow-hidden bg-black border border-neutral-800 shadow-2xl mx-auto"
              style={{
                width: '100%',
                maxWidth: '440px',
                height: '75vh',
                maxHeight: '680px',
              }}
            >
              {/* Header Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0F0F0F] border-b border-neutral-800 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FA520F] animate-pulse" />
                  <span className="text-[9px] font-mono font-semibold tracking-[0.2em] text-neutral-200">ANTERA_AIP_CONSOLE</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[8px] font-mono text-neutral-600">{clockTime}</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-500 hover:text-white transition-colors"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Terminal Logs View */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 font-mono scrollbar-none"
                style={{ scrollbarWidth: 'none' }}
              >
                {/* Console System Info */}
                <div className="text-[8px] text-neutral-600 leading-relaxed uppercase border-b border-neutral-900 pb-3">
                  <div>SECURE CONNECTION ESTABLISHED // AIP_v15_SECURE</div>
                  <div>AUTHORIZED INTAKE TERMINAL ONLY. ALL TRANSACTIONS LOGGED.</div>
                </div>

                {messages.length === 0 && (
                  <div className="space-y-4">
                    <div className="text-[10px] text-neutral-400 font-mono tracking-wide leading-relaxed font-light">
                      Initializing AIP query sequence. Select a structured operations route or specify custom telemetry requests in the console terminal input.
                    </div>

                    {/* Pre-configured terminal inputs */}
                    <div className="flex flex-col gap-2">
                      {quickPrompts.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(q.label)}
                          className="w-full text-left p-2.5 bg-[#0A0A0F] border border-neutral-800 text-[9px] font-mono text-neutral-300 hover:border-[#FA520F] hover:text-[#FA520F] transition-all"
                        >
                          &gt; {q.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Messages mapping */}
                {messages.map((msg, idx) => (
                  <Bubble key={idx} msg={msg} isLast={idx === messages.length - 1} />
                ))}

                {/* Streaming view */}
                {isLoading && streamingText && (
                  <Bubble 
                    msg={{ 
                      role: 'model', 
                      text: streamingText, 
                      time: getTime() 
                    }} 
                    isLast={true}
                    isStreaming={true}
                  />
                )}

                {/* Loading State indicator */}
                {isLoading && !streamingText && (
                  <div className="pt-2">
                    <TypingDots />
                  </div>
                )}
              </div>

              {/* Terminal Command Input Field */}
              <div className="p-3 bg-[#0A0A0A] border-t border-neutral-800 flex items-stretch gap-2">
                <div className="flex-1 flex items-center bg-black border border-neutral-800 px-3 py-1 text-xs">
                  <span className="text-[#FA520F] font-mono mr-2 select-none">&gt;</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
                    placeholder="ENTER COMMAND OR OPT_SEQ..."
                    className="flex-1 bg-transparent font-mono text-[10px] text-neutral-200 outline-none uppercase placeholder:text-neutral-700"
                    disabled={isLoading}
                  />
                </div>
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#FA520F] text-white hover:bg-white hover:text-black font-mono font-semibold text-[9px] tracking-widest px-4 uppercase transition-colors duration-300 disabled:opacity-40"
                >
                  RUN
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAgent;