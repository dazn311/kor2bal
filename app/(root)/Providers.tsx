'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import {Session} from "next-auth";

export interface AuthProviderProps {
    children: React.ReactNode;
    session?: Session | null;
}

export const Providers: React.FC<AuthProviderProps> = ({ children,session }: Readonly<AuthProviderProps>) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <SessionProvider baseUrl={'/'} session={session}>{children}</SessionProvider>
            <Toaster />
        </>
    );
};
