"use client"
import Image from "next/image";
import Link from "next/link";
import Authentication from "./_components/Authentication";
import { Button } from "@/components/ui/button";
import { auth } from "@/configs/firebaseConfig";
import ProfileAvatar from "./_components/ProfileAvatar";
import { useAuthContext } from "./provider";
import MagicButton from "./MagicButton";
import Contact from "./Contact";

export default function Home() {
  // const user = auth?.currentUser;
  // console.log(user)
  const user = useAuthContext();
  console.log(user?.user)
  return (
    <div className="min-h-screen bg-[#050816] bg-[url('/herobg.png')] bg-contain bg-top bg-no-repeat">
      <header className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-md border-b border-white/20 text-sm py-3 sm:py-3">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <div
              className="flex items-center gap-2 whitespace-nowrap cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/logo_h.png"
                alt="logo"
                width={290}
                height={110}
                className="w-[60px] h-[40px]"
              />
              <h2 className="font-bold text-lg text-white">Vision To Web</h2>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7 gap-6">
              
              {/* Navigation Items */}
              
              <a
                
                className=" text-white font-medium hover:text-violet-500 transition-all cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {" "}
                {/* font-medium text-white transition-all hover:bg-gradient-to-r hover:from-purple-900 hover:to-pink-400 hover:bg-clip-text hover:text-transparent*/}
                HOME
              </a>

              <div
                className="flex items-center gap-2 whitespace-nowrap cursor-pointer text-white font-medium hover:text-violet-500 transition-all"
                onClick={() => {
                  const element = document.getElementById("features");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                ABOUT
              </div>

              {/* <a
                href="#"
                className="text-white font-medium hover:text-violet-500 transition-all"
              >
                SERVICE
              </a> */}
              <div
                className="flex items-center gap-2 whitespace-nowrap cursor-pointer text-white font-medium hover:text-violet-500 transition-all"
                onClick={() => {
                  const element = document.getElementById("features2");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                CONTACT
              </div>

              {/* Authentication / Profile */}
              {!user?.user?.email ? (
                <Authentication>
                  <div className="flex items-center gap-x-2  text-white font-medium hover:text-violet-500 transition-all sm:border-l sm:border-white/30 py-2 sm:py-0 sm:ml-4 sm:pl-6 cursor-pointer ">
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Get Started
                  </div>
                </Authentication>
              ) : (
                <ProfileAvatar />
              )}
            </div>
          </div>
        </nav>
      </header>

      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* <div className="flex justify-center">
            <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
              href="tubeguruji.com" target="_blank">
              TUBEGURUJI Membership - Join Now
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </a>
          </div> */}

          <div className="mt-5 max-w-2xl text-center mx-auto cursor-default select-none">
            <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Design it. Build it
              <span className="bg-clip-text bg-gradient-to-tl from-violet-900 to-violet-500 text-transparent">
                {" "}
                Instantly
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto cursor-default select-none">
            <p className="text-lg text-gray-400 dark:text-neutral-400">
              Revolutionize your content creation with our AI-powered app,
              delivering engaging and high quality codes in seconds.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center select-none">
            {user?.user?.email ? (
              <a href="/dashboard">
                <MagicButton
                  title="Get Started"
                  position="right"
                  icon={undefined}
                />
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            ) : (
              <Authentication>
                <MagicButton
                  title="Get Started"
                  position="right"
                  icon={undefined}
                />
              </Authentication>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center py-10">
        <video
          src="/landingvid.mp4"
          autoPlay
          loop
          muted
          width={800}
          height={450}
          className="w-full max-w-[800px] h-auto mt-[-30px] object-contain rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-4xl font-bold text-white">ABOUT</h2>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto cursor-default">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          <a
            className="group flex flex-col justify-center rounded-xl p-4 md:p-7 transition-all duration-200 
             bg-transparent backdrop-blur-0 border border-transparent 
             hover:backdrop-blur-xl hover:border-purple-800/80"
          >
            <div className="flex justify-center items-center size-12 bg-purple-600 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                // class="lucide lucide-file-code-2"
              >
                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="m5 12-3 3 3 3" />
                <path d="m9 18 3-3-3-3" />
              </svg>
            </div>
            <div id="features" className="mt-5">
              <h3 className="group-hover:text-gray-100 text-lg font-semibold text-gray-400 dark:text-white dark:group-hover:text-gray-400">
                Effortless Conversion
              </h3>
              <p className="mt-1 group-hover:text-gray-300 text-gray-500 dark:text-neutral-400">
                Quickly transform wireframes into clean, structured, and
                production-ready code with minimal effort.
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center rounded-xl p-4 md:p-7 transition-all duration-200 
             bg-transparent backdrop-blur-0 border border-transparent 
             hover:backdrop-blur-xl hover:border-purple-800/80"
          >
            <div className="flex justify-center items-center size-12 bg-purple-600 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-git-fork"
              >
                <circle cx="12" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="6" r="3" />
                <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                <path d="M12 12v3" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-100 text-lg font-semibold text-gray-400 dark:text-white dark:group-hover:text-gray-400">
                Customizable
              </h3>
              <p className="mt-1 group-hover:text-gray-300 text-gray-500 dark:text-neutral-400">
                Easily adapt and extend components to match your project's
                unique design and functionality.
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center rounded-xl p-4 md:p-7 transition-all duration-200 
             bg-transparent backdrop-blur-0 border border-transparent 
             hover:backdrop-blur-xl hover:border-purple-800/80"
          >
            <div className="flex justify-center items-center size-12 bg-purple-600 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open-check"
              >
                <path d="M12 21V7" />
                <path d="m16 12 2 2 4-4" />
                <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-100 text-lg font-semibold text-gray-400 dark:text-white dark:group-hover:text-gray-400">
                Free to Use
              </h3>
              <p className="mt-1 group-hover:text-gray-300 text-gray-500 dark:text-neutral-400">
                Access a powerful wireframe-to-code conversion tool with
                well-documented resources at no cost.
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center rounded-xl p-4 md:p-7 transition-all duration-200
             bg-transparent backdrop-blur-0 border border-transparent 
             hover:backdrop-blur-xl hover:border-purple-800/80"
          >
            <div className="flex justify-center items-center size-12 bg-purple-600 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-messages-square"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-100 text-lg font-semibold text-gray-400 dark:text-white dark:group-hover:text-gray-400">
                Accurate Code Generation
              </h3>
              <p className="mt-1 group-hover:text-gray-300 text-gray-500 dark:text-neutral-400">
                Get high-quality, production-ready code that aligns with your
                design specifications.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div id="features2">
      <Contact />
      </div>
    </div>
  );
}
