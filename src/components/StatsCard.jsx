const StatsCard = ({ label, value, isDark, colorStyle }) => {
  return (
    <div className={`rounded-lg p-3 min-w-0 ${colorStyle}`}>
      <div
        className={`text-2xl font-bold ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {value}
      </div>

      <div
        className={`text-xs break-words ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default StatsCard;
