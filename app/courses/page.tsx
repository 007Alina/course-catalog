import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Courses
        </h1>

        <p className="mt-2 text-slate-300">
          Explore our available courses and discover your next topic to learn.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </main>
  );
}