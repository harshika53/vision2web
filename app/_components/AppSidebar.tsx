import React, { useState } from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
} from "@/components/ui/sidebar"
import { CircleDollarSign, Home, Paintbrush } from "lucide-react"
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const items = [
    {
        title: "Workspace",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Design",
        url: "/designs",
        icon: Paintbrush,
    },
    {
        title: "Credits",
        url: "/credits",
        icon: CircleDollarSign,
    },
]

export function AppSidebar() {
    const path = usePathname();
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

            {/* Sidebar with Fixed Border Color */}
            <Sidebar className="!bg-[#050816] min-h-screen text-white !border-[#050816]">
                <SidebarHeader className="!bg-[#050816] !border-[#050816]">
                    <div className='p-4'>
                        <button onClick={() => handleNavigation('/')} className="cursor-pointer">
                            <div className='flex items-center gap-2'>
                                <Image src={'/logo_h.png'} alt='logo' width={100} height={100}
                                    className='w-[50px] h-[34px]' />
                                <h2 className='font-bold text-lg text-white'>Vison To Web</h2>
                            </div>
                            <h2 className='text-sm text-gray-400 text-center'>Build Awesome</h2>
                        </button>
                    </div>
                </SidebarHeader>

                <SidebarContent className="!bg-[#050816] !border-[#050816]">
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu className='mt-5'>
                                {items.map((item, index) => (
                                    <a href={item.url} key={index}
                                        className={`p-2 text-lg flex gap-2 items-center text-white
                                        hover:bg-gray-700 rounded-lg
                                        ${path === item.url ? 'bg-gray-600' : ''}
                                        `}>
                                        <item.icon className='h-5 w-5' />
                                        <span>{item.title}</span>
                                    </a>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter className="!bg-[#050816] !border-[#050816]">
                    <h2 className='p-2 text-gray-400 text-sm'>vision2web.vercel.app</h2>
                </SidebarFooter>
            </Sidebar>
        </>
    )
}
