import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Stats() {
  const { theme } = useTheme(); // Use the theme from ThemeContext

  // Dynamically set colors based on the theme
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className={`grid grid-cols-2 md:grid-cols-3 text-center ${borderColor}`}>
        {/* Year of Foundation */}
        <div className={`border-r ${borderColor} col-span-2 grid-cols-2 p-4 flex items-end`}>
          <h2 className={`text-7xl font-bold ${textColor}`}>2021</h2>
          <p className={`text-xl ${subTextColor}`}>Year of Education</p>
        </div>
        {/* Completed Projects */}
        <div className={`border-l ${borderColor} p-4`}>
          <h2 className={`text-4xl ${textColor}`}>10+</h2>
          <p className={subTextColor}>Completed Projects</p>
        </div>
        {/* Upwork Clients */}
        <div className={`border-t ${borderColor} p-4`}>
          <h2 className={`text-4xl ${textColor}`}>3</h2>
          <p className={subTextColor}>Upwork Clients</p>
        </div>
        {/* Years of Experience */}
        <div className={`border-t border-l ${borderColor} p-4`}>
          <h2 className={`text-4xl ${textColor}`}>3+</h2>
          <p className={subTextColor}>Years of Experience</p>
        </div>
        {/* Client Satisfaction */}
        <div className={`border-t border-l ${borderColor} p-4`}>
          <h2 className={`text-4xl ${textColor}`}>100%</h2>
          <p className={subTextColor}>Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
}
