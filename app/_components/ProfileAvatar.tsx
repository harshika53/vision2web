"use client"
import { auth } from '@/configs/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useAuthContext } from '../provider';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function ProfileAvatar() {

    const user = useAuthContext();
    const router = useRouter();
    const onButtonPress = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            router.replace('/')
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
      <div>
        <Popover>
          <PopoverTrigger>
            {user?.user?.photoURL && (
              <img
                src={user?.user?.photoURL}
                alt="profile"
                className="w-[35px] h-[35px] rounded-full"
              />
            )}
          </PopoverTrigger>
          <PopoverContent className="w-[110px] bg-transparent border-none shadow-none p-0 mt-6">
            <Button
              variant="ghost"
              onClick={onButtonPress}
              className="w-[110px] h-[48px] px-3 py-1 bg-slate-950 rounded-md text-white border border-purple-800/80"
            >
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    );
}

export default ProfileAvatar