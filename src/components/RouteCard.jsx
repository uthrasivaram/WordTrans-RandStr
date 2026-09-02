import { NavLink } from "react-router-dom";

export default function RouteCard({ to, title, desc, accent }) {
  const isTeal = accent === "teal";

  return (
    <NavLink
      to={to}
      className={`group block rounded-xl border bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isTeal
          ? "border-teal-500/30 hover:border-teal-400"
          : "border-amber-500/30 hover:border-amber-400"
      }`}
    >
      {/* Arrow */}
      <div
        className={`mb-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
          isTeal
            ? "bg-teal-500/10 text-teal-400"
            : "bg-amber-500/10 text-amber-400"
        }`}
      >
        →
      </div>

      {/* Title */}
      <div className="mb-1 text-[19px] font-semibold">
        {title}
      </div>

      {/* Description */}
      <div className="text-[14px] leading-6 text-gray-400">
        {desc}
      </div>
    </NavLink>
  );
}