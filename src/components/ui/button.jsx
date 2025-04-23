export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl shadow-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
