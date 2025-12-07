import { Search } from 'lucide-react';

const EmptyState = ({ clearFilters, isDark }) => {
  return (
    <div className="text-center py-12 px-4 w-full overflow-x-hidden">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        }`}
      >
        <Search className="w-8 h-8 text-gray-400" />
      </div>

      <h3
        className={`text-lg font-semibold mb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        No activities found
      </h3>

      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 break-words`}>
        Try adjusting your filters or search query
      </p>

      <button
        onClick={clearFilters}
        className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors w-full sm:w-auto"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default EmptyState;
