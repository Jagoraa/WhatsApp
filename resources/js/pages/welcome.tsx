import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { MessageCircle } from 'lucide-react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="WhatsApp">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-6 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white">
                <div className="w-full max-w-md space-y-8 text-center">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <div className="rounded-2xl p-4">
                            <img src="/favicon.png" alt="WhatsApp" className="size-12" />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold">WhatsApp</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Connect instantly with friends and family
                        </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 text-left">
                        <div className="flex items-start gap-3">
                            <div className="rounded-full bg-green-500 p-2">
                                <MessageCircle className="size-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Free Messaging</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Send messages over Wi-Fi or data
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Auth Links */}
                    <div className="space-y-3 pt-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="block w-full rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
                            >
                                Go to Chats
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="block w-full rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
                                >
                                    Log In
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="block w-full rounded-lg border-2 border-green-500 px-6 py-3 font-semibold text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950 transition-colors"
                                    >
                                        Create Account
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}