import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import Image from 'next/image'

function AppHeader({ hideSidebar = false }) {
    return (
        <div className="flex top-0 left-0 right-0 z-50 p-4 shadow-sm items-center justify-between 
        w-full bg-[#050816]/70  backdrop-blur-md border-b border-white/20 text-white"
>
            {!hideSidebar ? <SidebarTrigger /> :
                <div className='flex items-center gap-2'>
                    <Image src={'/logo_h1.png'} alt='logo' width={100} height={100}
                        className='w-[50px] h-[34px]' />
                    <h2 className='font-bold text-lg'>Vision to web</h2>
                </div>
            }
            <ProfileAvatar />
        </div>
    )
}

export default AppHeader