export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded bg-black text-white hover:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
