import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./redux/provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-center">
          <h1 className="text-5xl mb-5">Redux</h1>
          <ul className="flex gap-4 justify-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/todo">Todo</Link>
            </li>
            <li>
              <Link href="/user">User</Link>
            </li>
          </ul>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}