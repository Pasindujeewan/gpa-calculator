import type { course } from "../types/maintypes";
import { useState } from "react";

type Props = {
  courses: course[];
};
export function GPAResult({ courses }: Props) {
  const [gpaR, setGpa] = useState(0.0);

  function handleonclick() {
    const gpa = courses.length
      ? (
          courses.reduce((acc, c) => acc + c.credit * c.grade, 0) /
          courses.reduce((acc, c) => acc + c.credit, 0)
        ).toFixed(2)
      : "0.00";
    setGpa(Number(gpa));
  }

  return (
    <div className="max-w-md mx-auto mt-6 p-6 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg">
      <div className="text-2xl font-bold mb-4">GPA: {gpaR}</div>

      <button
        onClick={handleonclick}
        className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Calculate GPA
      </button>
    </div>
  );
}
