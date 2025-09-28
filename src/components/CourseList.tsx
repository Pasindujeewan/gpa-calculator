import type { course } from "../types/maintypes";
type coursesList = {
  courses: course[];
};

export function CoursesList({ courses }: coursesList) {
  return (
    <ul className="max-w-md mx-auto mt-6 bg-white shadow-md rounded-lg divide-y divide-gray-200 border border-gray-200">
      {courses.map((c, i) => (
        <li
          key={i}
          className="flex justify-between items-center px-4 py-2 hover:bg-gray-50 transition"
        >
          <span className="font-medium text-gray-700">{c.name}</span>
          <span className="text-gray-500 text-sm">Credits: {c.credit}</span>
          <span className="text-blue-600 font-semibold">{c.gradeLetter}</span>
        </li>
      ))}
    </ul>
  );
}
