import { MessageCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChatHeader } from './chat-header';
import { ChatInput } from './chat-input';
import { MessageBubble } from './message-bubble';
import { ChatWindowSkeleton } from './message-skeleton';

interface Message {
    id: string;
    content: string;
    isOwn: boolean;
    timestamp: string;
    status?: 'sent' | 'delivered' | 'read';
}

interface Conversation {
    id: string;
    name: string;
    avatar: string;
    status?: string;
    messages: Message[];
}

interface ChatWindowProps {
    conversation?: Conversation;
    onSendMessage?: (message: string) => void;
    isLoading?: boolean;
}

export function ChatWindow({
    conversation,
    onSendMessage,
    isLoading = false,
}: ChatWindowProps) {
    const [messages, setMessages] = useState<Message[]>(
        conversation?.messages || []
    );
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages(conversation?.messages || []);
    }, [conversation]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (content: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            content,
            isOwn: true,
            timestamp: new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            }),
            status: 'sent',
        };

        setMessages([...messages, newMessage]);
        onSendMessage?.(content);

        // Simulate message delivery
        setTimeout(() => {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === newMessage.id
                        ? { ...msg, status: 'delivered' }
                        : msg
                )
            );
        }, 500);

        // Simulate message read
        setTimeout(() => {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === newMessage.id
                        ? { ...msg, status: 'read' }
                        : msg
                )
            );
        }, 2000);
    };

    if (!conversation) {
        return (
            <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center text-gray-500 dark:text-gray-400">
                    <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-30" />
                    <p className="text-lg font-medium">
                        Select a conversation to start chatting
                    </p>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return <ChatWindowSkeleton />;
    }

    return (
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-950">
            <ChatHeader
                name={conversation.name}
                avatar={conversation.avatar}
                status={conversation.status}
            />

            {/* Messages Area */}
            <motion.div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900/50 flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                {messages.length > 0 ? (
                    <>
                        {messages.map((message, index) => (
                            <motion.div key={message.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05, duration: 0.3 }}>
                                <MessageBubble
                                    content={message.content}
                                    timestamp={message.timestamp}
                                    isOwn={message.isOwn}
                                    status={message.status}
                                />
                            </motion.div>
                        ))}
                        <div ref={messagesEndRef} />
                    </>
                ) : (
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <img
                                src={conversation.avatar}
                                alt={conversation.name}
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                {conversation.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Start a conversation
                            </p>
                        </div>
                    </div>
                )}
            </motion.div>

            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
}
