import { useState } from 'react';
import { ChatSidebar } from '@/components/chat/chat-sidebar';
import { ChatWindow } from '@/components/chat/chat-window';
import ChatLayout from '@/layouts/chat-layout';
import { Head } from '@inertiajs/react';

// Mock data for conversations
const mockConversations = [
    {
        id: '1',
        name: 'Ahmad STE Cm',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad',
        lastMessage: '200ml Software engineering lectures...',
        timestamp: '22:09',
        unreadCount: 0,
        status: 'online',
        messages: [
            {
                id: '1-1',
                content: 'Hey! How are you doing?',
                isOwn: false,
                timestamp: '10:30 AM',
                status: 'read' as const,
            },
            {
                id: '1-2',
                content: 'I\'m doing great! Just finished the project',
                isOwn: true,
                timestamp: '10:32 AM',
                status: 'read' as const,
            },
            {
                id: '1-3',
                content: '200ml Software engineering lectures...',
                isOwn: false,
                timestamp: '22:09',
                status: 'delivered' as const,
            },
        ],
    },
    {
        id: '2',
        name: 'Ibrahim Babayye',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim',
        lastMessage: 'Idan har dai numb...',
        timestamp: '14/12/2025',
        unreadCount: 2,
        status: 'online',
        messages: [
            {
                id: '2-1',
                content: 'Did you complete the assignment?',
                isOwn: false,
                timestamp: '2:00 PM',
                status: 'read' as const,
            },
            {
                id: '2-2',
                content: 'Yes, just submitted it',
                isOwn: true,
                timestamp: '2:05 PM',
                status: 'read' as const,
            },
        ],
    },
    {
        id: '3',
        name: 'Young Adam',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Young',
        lastMessage: 'Hello everyone! Sys...',
        timestamp: 'Yesterday',
        unreadCount: 5,
        status: 'offline',
        messages: [
            {
                id: '3-1',
                content: 'Hello everyone! System is working fine',
                isOwn: false,
                timestamp: '5:30 PM',
                status: 'delivered' as const,
            },
        ],
    },
    {
        id: '4',
        name: 'Class of 2024',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Class2024',
        lastMessage: 'This message can\'t be displayed...',
        timestamp: 'Yesterday',
        unreadCount: 0,
        status: 'offline',
        messages: [
            {
                id: '4-1',
                content: 'Group announcement coming soon',
                isOwn: false,
                timestamp: '3:45 PM',
                status: 'read' as const,
            },
        ],
    },
    {
        id: '5',
        name: 'My Airtel 1 (You)',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MyAirtel',
        lastMessage: 'Video',
        timestamp: 'Yesterday',
        unreadCount: 0,
        status: 'offline',
        messages: [
            {
                id: '5-1',
                content: 'Check this video!',
                isOwn: true,
                timestamp: '4:20 PM',
                status: 'read' as const,
            },
        ],
    },
    {
        id: '6',
        name: 'Abdulrahim Husseni N2',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abdulrahim',
        lastMessage: '0:32',
        timestamp: 'Yesterday',
        unreadCount: 0,
        status: 'offline',
        messages: [
            {
                id: '6-1',
                content: 'Listen to this voice message',
                isOwn: false,
                timestamp: '6:00 PM',
                status: 'read' as const,
            },
        ],
    },
    {
        id: '7',
        name: 'Maryam Ikaratu',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maryam',
        lastMessage: '08124946022',
        timestamp: 'Yesterday',
        unreadCount: 0,
        status: 'offline',
        messages: [
            {
                id: '7-1',
                content: 'My new phone number',
                isOwn: false,
                timestamp: '7:15 PM',
                status: 'delivered' as const,
            },
        ],
    },
    {
        id: '8',
        name: 'Umar Buba Kuma Cm',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Umar',
        lastMessage: 'Now',
        timestamp: 'Yesterday',
        unreadCount: 1,
        status: 'online',
        messages: [
            {
                id: '8-1',
                content: 'Just arrived!',
                isOwn: false,
                timestamp: '8:30 PM',
                status: 'read' as const,
            },
        ],
    },
];

export default function Chat() {
    const [activeConversationId, setActiveConversationId] = useState<string>(
        '1'
    );

    const activeConversation = mockConversations.find(
        (conv) => conv.id === activeConversationId
    );

    const handleSendMessage = (message: string) => {
        console.log('Message sent:', message);
        // This will be connected to the backend later
    };

    return (
        <ChatLayout>
            <Head title="Chats" />
            <div className="flex h-full w-full flex-1 overflow-hidden bg-white dark:bg-gray-950">
                {/* Sidebar - 1/3 width on desktop */}
                <div className="w-full md:w-1/3 border-r border-gray-200 dark:border-gray-700 overflow-hidden">
                    <ChatSidebar
                        conversations={mockConversations}
                        activeConversationId={activeConversationId}
                        onSelectConversation={setActiveConversationId}
                    />
                </div>

                {/* Chat Window - 2/3 width on desktop, hidden on mobile when no chat selected */}
                <div className="hidden md:flex w-2/3 overflow-hidden flex-col">
                    <ChatWindow
                        conversation={activeConversation}
                        onSendMessage={handleSendMessage}
                    />
                </div>

                {/* Mobile Chat Window - shown when chat selected */}
                <div className="flex md:hidden w-full overflow-hidden flex-col">
                    {activeConversationId ? (
                        <ChatWindow
                            conversation={activeConversation}
                            onSendMessage={handleSendMessage}
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full bg-gray-50 dark:bg-gray-900">
                            <p className="text-gray-500">Select a chat</p>
                        </div>
                    )}
                </div>
            </div>
        </ChatLayout>
    );
}
