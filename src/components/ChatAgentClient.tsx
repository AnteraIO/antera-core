'use client';
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

const ChatAgent = dynamic(() => import('@/components/ChatAgent'), { ssr: false });

export default function ChatAgentClient() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInteraction = useCallback(() => {
    if (!shouldLoad) {
      setShouldLoad(true);
    }
    setIsOpen(true);
  }, [shouldLoad]);

  if (!shouldLoad) {
    return (
      <div
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        onMouseEnter={handleInteraction}
        onClick={handleInteraction}
        aria-label="Chat with Bruno"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleInteraction()}
      >
        <div
          className="relative flex items-center justify-center rounded-full shadow-xl bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 cursor-pointer"
          style={{ width: 78, height: 78 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png"
            alt="Bruno"
            style={{ width: 66, height: 66, objectFit: 'contain' }}
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  return <ChatAgent onClose={() => setIsOpen(false)} isOpen={isOpen} />;
}