import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanban",
  description: "Created by TienVNV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-dvh w-dvw">
          <nav className="h-10 w-full bg-teal-600">
            <ul className="h-full flex flex-row items-center justify-start gap-x-2.5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/post">Post</Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
        
      </body>
    </html>
  );
}
