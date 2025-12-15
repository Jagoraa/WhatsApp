import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { type PropsWithChildren } from 'react';

export default function ChatLayout({
    children,
}: PropsWithChildren) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden p-0">
                {children}
            </AppContent>
        </AppShell>
    );
}
