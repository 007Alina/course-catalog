import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies course catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-black text-white">
        <header className="border-b border-gray-800 bg-gray-950">
          <nav className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-slate-900"
              >
                Course Catalog
              </Link>

              <div className="flex items-center gap-1">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
                >
                  Home
                </Link>

                <Link
                  href="/courses"
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
                >
                  Courses
                </Link>

                <Link
                  href="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
                >
                  About
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}