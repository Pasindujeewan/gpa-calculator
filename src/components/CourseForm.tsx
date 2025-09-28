import type { course } from "../types/maintypes";
import { useState } from "react";

type Props = {
  addCourse: (Course: course) => void;
};

export function CourseForm({ addCourse }: Props) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(0);
  const [credit, setCredit] = useState(0);
  const [gradeLetter, setGradeLetter] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || credit <= 0 || grade < 0) return;
    addCourse({ name, credit, grade, gradeLetter });
    setName("");
    setCredit(0);
    setGrade(0);
    setGradeLetter("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4 border border-gray-200"
    >
      <h2 className="text-xl font-semibold text-gray-700 text-center">
        Add Course
      </h2>

      <div>
        <label
          className="block text-gray-700 font-medium mb-1"
          htmlFor="subjectName"
        >
          Subject Name
        </label>
        <input
          id="subjectName"
          type="text"
          placeholder="Enter Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          className="block text-gray-700 font-medium mb-1"
          htmlFor="credits"
        >
          Credits
        </label>
        <input
          id="credits"
          type="number"
          placeholder="Enter Credits"
          value={credit}
          onChange={(e) => setCredit(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="grade">
          Grade
        </label>
        <select
          id="grade"
          value={gradeLetter}
          onChange={(e) => {
            const selectedOption = e.target.selectedOptions[0];
            setGradeLetter(selectedOption.value);
            setGrade(Number(selectedOption.dataset.value));
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
        >
          <option value="" disabled selected hidden>
            Select Grade
          </option>
          <option data-value={4.0} value="A+">
            A+
          </option>
          <option data-value={4.0} value="A">
            A
          </option>
          <option data-value={3.7} value="A-">
            A-
          </option>
          <option data-value={3.3} value="B+">
            B+
          </option>
          <option data-value={3.0} value="B">
            B
          </option>
          <option data-value={2.7} value="B-">
            B-
          </option>
          <option data-value={2.3} value="C+">
            C+
          </option>
          <option data-value={2.0} value="C">
            C
          </option>
          <option data-value={1.7} value="C-">
            C-
          </option>
          <option data-value={1.0} value="F">
            F
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        ➕ Add Course
      </button>
    </form>
  );
}
