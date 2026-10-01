import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white">
        Course not found
      </h1>

      <p className="mt-4 text-gray-400">
        The course you are looking for does not exist.
      </p>

      <Link
        href="/courses"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
      >
        Back to Courses
      </Link>
    </main>
  );
}