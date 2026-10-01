import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-black text-white">
        <header className="border-b border-gray-800 bg-gray-950">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-blue-400"
            >
              Course Catalog
            </Link>

            <div className="flex gap-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/courses"
                className="text-gray-300 hover:text-white"
              >
                Courses
              </Link>

              <Link
                href="/about"
                className="text-gray-300 hover:text-white"
              >
                About
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}