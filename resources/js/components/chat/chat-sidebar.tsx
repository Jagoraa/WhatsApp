import { Search, Filter, CirclePlus, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { ConversationItem } from './conversation-item';
import { ConversationListSkeleton } from './skeleton-loaders';

interface Conversation {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    unreadCount?: number;
}

interface ChatSidebarProps {
    conversations: Conversation[];
    activeConversationId?: string;
    onSelectConversation?: (id: string) => void;
    isLoading?: boolean;
}

export function ChatSidebar({
    conversations,
    activeConversationId,
    onSelectConversation,
    isLoading = false,
}: ChatSidebarProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredConversations = conversations.filter((conv) =>
        conv.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full h-full bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Header */}
            <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Chats
                    </h1>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <CirclePlus className="w-6 h-6 text-green-500" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search or start a new chat"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border-0 outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
                {isLoading ? (
                    <ConversationListSkeleton />
                ) : filteredConversations.length > 0 ? (
                    filteredConversations.map((conversation) => (
                        <ConversationItem
                            key={conversation.id}
                            {...conversation}
                            isActive={activeConversationId === conversation.id}
                            onClick={() => onSelectConversation?.(conversation.id)}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center text-gray-500 dark:text-gray-400">
                        <MessageCircle className="w-12 h-12 mb-3 opacity-50" />
                        <p>No conversations found</p>
                    </div>
                )}
            </div>
        </div>
    );
}
