import { Skeleton } from '@/components/ui/skeleton';

export function ChatHeaderSkeleton() {
    return (
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 flex-1">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Skeleton className="w-9 h-9 rounded-full" />
                <Skeleton className="w-9 h-9 rounded-full" />
                <Skeleton className="w-9 h-9 rounded-full" />
            </div>
        </div>
    );
}

export function MessageBubbleSkeleton({ isOwn }: { isOwn: boolean }) {
    return (
        <div className={`flex mb-2 gap-2 ${isOwn ? 'justify-end' : 'justify-start'}`}>
            <Skeleton
                className={`h-10 rounded-lg ${
                    isOwn ? 'w-48 rounded-bl-lg' : 'w-56 rounded-br-lg'
                }`}
            />
        </div>
    );
}

export function ChatWindowSkeleton() {
    return (
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-950">
            <ChatHeaderSkeleton />

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900/50 space-y-3">
                <MessageBubbleSkeleton isOwn={false} />
                <MessageBubbleSkeleton isOwn={true} />
                <MessageBubbleSkeleton isOwn={false} />
                <MessageBubbleSkeleton isOwn={true} />
                <MessageBubbleSkeleton isOwn={false} />
            </div>

            {/* Input Area */}
            <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700">
                <Skeleton className="h-12 rounded-full" />
            </div>
        </div>
    );
}
