import { MoreVertical, Phone, Video, Search } from 'lucide-react';

interface ChatHeaderProps {
    name: string;
    avatar: string;
    status?: string;
}

export function ChatHeader({ name, avatar, status = 'online' }: ChatHeaderProps) {
    return (
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950">
            <div className="flex items-center gap-3">
                <img
                    src={avatar}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                        {name}
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {status}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Video className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
            </div>
        </div>
    );
}
