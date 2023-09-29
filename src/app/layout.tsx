import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Avatar, AvatarFallback, AvatarImage, } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Heart from '@/components/icons/heart';
import Link from 'next/link';
import cloudinary from 'cloudinary';
import { Folder } from './albums/page';
import MyLogo from "/public/Gallery-Book.png";
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Photos Album",
  description: "Upload or add your images",
}
async function SideMenu() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders : Folder[];
  }
  
  return (
    <div className="w-1/5 pb-12">
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button asChild variant="ghost" className="flex justify-start w-full gap-2">
            <Link href="/gallery">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Gallery
            </Link>
            </Button>
            <Button asChild variant="ghost" className="flex justify-start w-full gap-2">
              <Link href="/albums">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
              Albums
              </Link>
            </Button>
            {folders.map(folder => (
            <Button variant="ghost" asChild key={folder.name} className="flex justify-start w-full gap-2">
              <Link className="pl-8" href={`/albums/${folder.path}`}>
                {folder.name}
              </Link>
            </Button>
            ))}
            <Button asChild variant="ghost" className="flex justify-start w-full gap-2">
              <Link href="/favorites">
            <Heart/>
              Favorites
              </Link>
            </Button>
          </div>
        </div>
        </div>
        </div>
  )
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
      <div className="border-b ">
          <div className="container flex items-center h-16 px-4 mx-auto">
          <Image width={50} height={50} src={MyLogo} alt='logo'/> Moaz&apos;s Cloud Photos Album
            <div className="flex items-center ml-auto space-x-4">
              <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/69762233?u=e16fe467f955026f648aec5cb24db7842a2b66eb&amp;v=4" alt="moazmalik" />
                <AvatarFallback>MM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex ">
        <SideMenu/>
        <div className="w-full px-4 pt-12">{children}</div>
        </div>
        </body>
    </html>
  )
}
