export function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`w-full border rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
    />
  );
}
