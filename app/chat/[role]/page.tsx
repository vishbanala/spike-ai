import { ChatScreen } from "@/components/ChatScreen";

const roles = ["outside", "libero", "setter", "middle", "opposite"] as const;
type Role = (typeof roles)[number];

interface PageProps {
  params: Promise<{ role: string }>;
}

export default async function ChatPage({ params }: PageProps) {
  const { role } = await params;

  if (!roles.includes(role as Role)) {
    return <p className="text-white">Invalid role.</p>;
  }

  return <ChatScreen role={role as Role} />;
}
