import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-8 py-20">
      <section>
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-blue-400">
          Advanced Web Technologies
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          Course Catalog
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Welcome to our course catalog. Explore the courses and learn
          modern web development with Next.js, React, FastAPI, databases,
          and other technologies.
        </p>

        <Link
          href="/courses"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
        >
          Explore Courses
        </Link>
      </section>
    </main>
  );
}