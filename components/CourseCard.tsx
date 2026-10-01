import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block rounded-xl border border-gray-700 bg-gray-900 p-6 text-white transition hover:border-blue-500 hover:bg-gray-800"
    >
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-3 text-gray-300">
        {description}
      </p>

      <p className="mt-3 text-gray-400">
        Credits: {credits}
      </p>

      <p className="mt-3 text-gray-300">
        ❤ {likes}
      </p>
    </Link>
  );
}