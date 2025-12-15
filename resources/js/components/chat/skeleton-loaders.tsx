import { Skeleton } from '@/components/ui/skeleton';

export function ConversationSkeleton() {
    return (
        <div className="flex items-center gap-3 px-3 py-2 border-l-4 border-transparent">
            <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-40" />
            </div>
        </div>
    );
}

export function ConversationListSkeleton() {
    return (
        <div className="space-y-1">
            {Array.from({ length: 8 }).map((_, i) => (
                <ConversationSkeleton key={i} />
            ))}
        </div>
    );
}
