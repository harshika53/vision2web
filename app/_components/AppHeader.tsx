import { SidebarTrigger } from '@/components/ui/sidebar'
import React, { useState } from 'react'
import ProfileAvatar from './ProfileAvatar'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

function AppHeader({ hideSidebar = false }) {

    const router = useRouter();
        const [isTransitioning, setIsTransitioning] = useState(false);
    
        const handleNavigation = (href: string) => {
            setIsTransitioning(true);
            setTimeout(() => {
                router.push(href);
            }, 500); // Delays navigation for animation
        };

    return (
    <>
        {isTransitioning && (
            <motion.div
                className="fixed inset-0 bg-[#050816] z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            />
        )}

        <div className="flex top-0 left-0 right-0 z-50 p-4 shadow-sm items-center justify-between 
            w-full bg-[#050816]/70 backdrop-blur-md border-b border-white/20 text-white"
        >
            {!hideSidebar ? (
                <SidebarTrigger />
            ) : (
                <button onClick={() => handleNavigation('/dashboard')} className="flex items-center gap-2 cursor-pointer">
                    <Image src={'/logo_h.png'} alt='logo' width={100} height={100}
                        className='w-[50px] h-[34px]' />
                    <h2 className='font-bold text-lg'>Vision to Web</h2>
                </button>
            )}
            
            <ProfileAvatar />
        </div>
    </>
);

}

export default AppHeader