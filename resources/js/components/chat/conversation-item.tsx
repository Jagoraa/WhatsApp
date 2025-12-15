import { cn } from '@/lib/utils';
import { Search, MoreVertical } from 'lucide-react';

interface ConversationItemProps {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    isActive?: boolean;
    unreadCount?: number;
    onClick?: () => void;
}

export function ConversationItem({
    id,
    name,
    avatar,
    lastMessage,
    timestamp,
    isActive = false,
    unreadCount,
    onClick,
}: ConversationItemProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                'flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors border-l-4',
                isActive
                    ? 'bg-gray-100 dark:bg-gray-800 border-green-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-900 border-transparent'
            )}
        >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
                <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                {unreadCount ? (
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                        {unreadCount > 9 ? '9+' : unreadCount}
                    </div>
                ) : null}
            </div>

            {/* Conversation Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                        {name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                        {timestamp}
                    </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {lastMessage}
                </p>
            </div>
        </div>
    );
}
