'use client';
import { useEffect } from 'react';

function getPreferredTheme(): 'dark' | 'light' {
    try {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark' || stored === 'light') return stored;
    } catch (e) {}
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

export default function ThemeInitializer() {
    useEffect(() => {
        const theme = getPreferredTheme();
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Optional: listen for system changes if no explicit user choice saved
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e: MediaQueryListEvent) => {
            try {
                if (!localStorage.getItem('theme')) {
                    if (e.matches) root.classList.add('dark');
                    else root.classList.remove('dark');
                }
            } catch (err) {}
        };
        mq.addEventListener?.('change', handler);
        return () => mq.removeEventListener?.('change', handler);
    }, []);

    return null;
}