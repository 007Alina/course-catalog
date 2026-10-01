export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-8 py-20">
      <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
        About
      </p>

      <h1 className="mt-4 text-4xl font-bold">
        About This Project
      </h1>

      <div className="mt-6 max-w-2xl space-y-4 text-gray-400">
        <p>
          This course catalog is a semester project for the Advanced Web
          Technologies course.
        </p>

        <p>
          It demonstrates Next.js App Router, TypeScript, Server Components,
          Client Components, dynamic routes, and basic navigation.
        </p>
      </div>
    </main>
  );
}