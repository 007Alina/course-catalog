import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <Link href={`/courses/${id}`}>
      <Card className="h-full border-slate-200 transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent className="text-sm leading-6 text-slate-600">
          <p>{description}</p>

          <div className="text-sm font-medium text-slate-600">
            <span>{credits} credits</span>

            <Button variant="ghost" size="sm">
              ❤️ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}