import { useState } from "react";
import type { course } from "../types/maintypes";
import { CourseForm } from "../components/CourseForm";
import { CoursesList } from "../components/CourseList";
import { GPAResult } from "../components/GPAResult";

export default function Home() {
  const [courses, setCourses] = useState<course[]>([]);

  const addCourse = (course: course) => setCourses([...courses, course]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">GPA Calculator</h1>
      <CourseForm addCourse={addCourse} />
      <CoursesList courses={courses} />
      <GPAResult courses={courses} />
    </div>
  );
}
