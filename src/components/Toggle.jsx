export default function Toggle({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 text-[14px] cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="focus-ring w-4 h-4 accent-amber"
      />
      {label}
    </label>
  );
}
