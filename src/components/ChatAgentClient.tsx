'use client';
import dynamic from "next/dynamic";

const ChatAgent = dynamic(() => import("@/components/ChatAgent"), { ssr: false });

export default function ChatAgentClient() {
  return <ChatAgent />;
}
