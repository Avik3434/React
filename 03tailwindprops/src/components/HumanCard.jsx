// HumanCard.jsx
import React from "react";

const HumanCard = ({
  image,
  imageAlt,
  name,
  description,
  skills = [],
  skillTheme = "indigo",
  className = "",
}) => {
  // Tailwind color themes for skill badges, cycled through
  const themeMap = {
    indigo: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    amber: "bg-amber-50 text-amber-700 ring-amber-200",
    sky: "bg-sky-50 text-sky-700 ring-sky-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-200",
  };

  const badgeClasses = themeMap[skillTheme] || themeMap.indigo;

  return (
    <div
      className={`w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl ${className}`}
    >
      {/* Image section */}
      <div className="h-56 w-full overflow-hidden bg-linear-to-br from-indigo-200 to-indigo-400">
        <img
          src={image}
          alt={imageAlt || `Portrait of ${name}`}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Content section */}
      <div className="p-6">
        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          {name}
        </h2>

        {/* Small description */}
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        {/* Skills (3 in a row) */}
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${badgeClasses}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HumanCard;