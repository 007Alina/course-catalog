export default function Loading() {
  return (
    <main className="min-h-screen p-8">
      <div className="animate-pulse">
        <div className="h-10 w-3/4 rounded bg-gray-700"></div>
        <div className="mt-6 h-6 w-1/2 rounded bg-gray-700"></div>
        <div className="mt-4 h-6 w-24 rounded bg-gray-700"></div>
        <div className="mt-6 h-12 w-24 rounded bg-gray-700"></div>
      </div>
    </main>
  );
}