import { Paperclip, Smile, Mic, Send } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ChatInputProps {
    onSendMessage?: (message: string) => void;
    placeholder?: string;
}

export function ChatInput({
    onSendMessage,
    placeholder = 'Type a message...',
}: ChatInputProps) {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage?.(message);
            setMessage('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 flex items-end gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0">
                <Paperclip className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            <div className="flex-1 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex-shrink-0">
                    <Smile className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent border-0 outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none max-h-32"
                    rows={1}
                />
            </div>

            {message.trim() ? (
                <button
                    onClick={handleSend}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
                >
                    <Send className="w-5 h-5 text-green-500" />
                </button>
            ) : (
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0">
                    <Mic className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
            )}
        </div>
    );
}
