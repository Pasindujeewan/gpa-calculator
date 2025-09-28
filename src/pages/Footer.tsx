export function Footer() {
  return (
    <footer className="mt-8 bg-gray-800 text-white text-center py-4 rounded-t-lg shadow-md">
      <p className="text-sm">
        © {new Date().getFullYear()} GPA Calculator | Developed by{" "}
        <span className="font-semibold">Pasindu Jeewan</span>
      </p>
      <p className="text-xs mt-1">Made with using React & Tailwind CSS</p>
    </footer>
  );
}
