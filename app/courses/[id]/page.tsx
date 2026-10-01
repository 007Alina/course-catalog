import LikeButton from "../../../components/LikeButton";
import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { id } = await params;

  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">{course.title}</h1>

      <p className="mt-4 text-lg">{course.description}</p>

      <p className="mt-4">Credits: {course.credits}</p>

      <div className="mt-6">
        <LikeButton initialLikes={course.likes} />
      </div>
    </main>
  );
}