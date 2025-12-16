import { cn } from '@/lib/utils';
import { Check, CheckCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface MessageBubbleProps {
    content: string;
    timestamp: string;
    isOwn: boolean;
    status?: 'sent' | 'delivered' | 'read';
    mediaType?: 'image' | 'video' | 'audio' | 'document';
    mediaUrl?: string;
}

export function MessageBubble({
    content,
    timestamp,
    isOwn,
    status = 'read',
    mediaType,
    mediaUrl,
}: MessageBubbleProps) {
    return (
        <motion.div
            className={cn(
                'flex mb-2 gap-2',
                isOwn ? 'justify-end' : 'justify-start'
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className={cn(
                    'max-w-xs px-4 py-2 rounded-lg',
                    isOwn
                        ? 'bg-green-500 text-white rounded-bl-lg'
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-br-lg'
                )}
            >
                {mediaType ? (
                    <div className="mb-2">
                        {mediaType === 'image' && mediaUrl && (
                            <img
                                src={mediaUrl}
                                alt="message"
                                className="rounded max-w-xs"
                            />
                        )}
                        {mediaType === 'video' && mediaUrl && (
                            <video
                                src={mediaUrl}
                                className="rounded max-w-xs"
                                controls
                            />
                        )}
                    </div>
                ) : null}

                <p className="break-words">{content}</p>

                <div className="flex items-center justify-end gap-1 mt-1">
                    <span className={cn(
                        'text-xs',
                        isOwn ? 'text-green-100' : 'text-gray-500 dark:text-gray-400'
                    )}>
                        {timestamp}
                    </span>
                    {isOwn && (
                        <div className={cn(
                            'w-4 h-4',
                            status === 'read' ? 'text-blue-300' : 'text-green-100'
                        )}>
                            {status === 'read' ? (
                                <CheckCheck className="w-4 h-4" />
                            ) : (
                                <Check className="w-4 h-4" />
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
