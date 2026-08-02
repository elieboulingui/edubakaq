// app/components/BottomMenu.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const BottomMenu = () => {
    const pathname = usePathname();

 const menuItems = [
    {
        id: 1,
        label: 'Accueil',
        icon: '🏠',
        href: '/'
    },
    {
        id: 2,
        label: 'Culture',
        icon: '🌍',
        href: '/Culture'
    },
    {
        id: 3,
        label: 'Histoire',
        icon: '📜',
        href: '/histoire'
    },
    {
        id: 4,
        label: 'Compter',
        icon: '🔢',
        href: '/compter'
    },
    {
        id: 5,
        label: 'Proverbe',
        icon: '💬',
        href: '/proverbe'
    },
];
    // Filtrer les éléments pour n'afficher que ceux qui ont un href valide
    const validMenuItems = menuItems.filter(item => item.href);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-around items-center px-2 py-1">
                    {validMenuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors ${isActive
                                        ? 'text-green-600 bg-green-50'
                                        : 'text-gray-500 hover:text-green-500 hover:bg-green-50'
                                    }`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className={`text-xs font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BottomMenu;
