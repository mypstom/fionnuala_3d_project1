// ...前面 import 保持不變
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const links = [
  {
    href: "https://www.threads.com/@fionnualaaa_",
    icon: "threads.svg",
  },
  {
    href: "https://www.instagram.com/fionnualaaa_/",
    icon: "ig.svg",
  },
  {
    href: "mailto:111306016@g.nccu.edu.tw",
    icon: "/mail.svg",
  },
];

export const metadata = {
  title: "費歐娜娜的數位履歷",
  description: "我是一個翹課的學生。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-pink-100 p-8">
          <div className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-yellow-100 border-4 border-pink-300 flex justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden shadow-xl">
            <Image
              src={AvatarImg}
              alt="Avatar"
              width={80}
              height={120}
              className="rounded-full border-4 border-pink-300"
            />
            <h1 className="mt-2 text-pink-600 font-bold text-xl">費歐娜娜</h1>
            <p className="max-w-[380px] text-center text-gray-600">
              我是一個愛蹺課的學生。
            </p>

            {/* 社群連結 */}
          
            <div className="flex gap-2 my-5">
               {links.map((link, i) => (
                <a href={link.href} target="_blank" key={i}>
                  <div
                    className={`transition w-[40px] h-[40px] rounded-full border border-pink-400 hover:scale-105 transition flex items-center justify-center bg-white ${link.color}`} >
                      <Image
                        src={link.icon}
                        alt={`icon-${i}`}
                        width={i === 0 ? 28 : 30}
                        height={i === 0 ? 28 : 30}
                        className="object-contain"
                      />
                  </div>
                </a>
              ))}
            </div>

            {/* 頁面切換 */}
            <div className="w-full flex flex-col gap-2">
              <Link href="/">
                <div className="w-full h-[84px] bg-pink-100 hover:bg-pink-200 text-pink-300 rounded-xl flex items-center justify-center text-lg font-medium shadow">
                  Home Page
                </div>
              </Link>

              <Link href="/about">
                <div className="w-full h-[84px] bg-blue-100 hover:bg-blue-200 text-blue-300 rounded-xl flex items-center justify-center text-lg font-medium shadow">
                  About Meeeeee
                </div>
              </Link>

              <div className="w-full h-[84px] bg-pink-100 hover:bg-pink-200 text-pink-300 rounded-xl flex items-center justify-center text-lg font-medium shadow">
                作品分類二
              </div>
              <div className="w-full h-[84px] bg-blue-100 hover:bg-blue-200 text-blue-300 rounded-xl flex items-center justify-center text-lg font-medium shadow">
                作品分類三
              </div>
            </div>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
