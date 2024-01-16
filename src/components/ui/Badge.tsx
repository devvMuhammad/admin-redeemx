export default function Badge({ children }: { children: number | string }) {
  return (
    <p className="inline-flex items-center rounded-xl border px-2.5 py-0.5 text-xs font-thin bg-white text-black">
      {children}
    </p>
  );
}
