import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { types, statuses } from '../utils/constants';

const FilterPanel = ({
  searchQuery,
  setSearchQuery,
  selectedProgram,
  setSelectedProgram,
  selectedType,
  setSelectedType,
  selectedStatus,
  setSelectedStatus,
  sortBy,
  setSortBy,
  activeFiltersCount,
  isDark,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const clearFilters = () => {
    setSelectedProgram('all');
    setSelectedType('all');
    setSelectedStatus('all');
    setSearchQuery('');
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col sm:flex-row gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex-1 relative min-w-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none break-words ${
              isDark
                ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>

        <div className="flex gap-2 min-w-0">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg transition-colors min-w-0 ${
              isDark
                ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-300'
                : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
            }`}
          >
            <Filter className="w-5 h-5 flex-shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Filters</span>

            {activeFiltersCount > 0 && (
              <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none min-w-0 ${
              isDark
                ? 'bg-gray-700 border-gray-600 text-gray-300'
                : 'bg-white border-gray-300 text-gray-700'
            }`}
          >
            <option value="recent">Most Recent</option>
            <option value="dueDate">Due Date</option>
          </select>
        </div>
      </div>

      {showFilters && (
        <div
          className={`mt-4 p-4 rounded-lg border max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0 ${
            isDark
              ? 'bg-gray-700/50 border-gray-600'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between mb-3 min-w-0">
            <h3
              className={`font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Filter Activities
            </h3>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className={`text-sm hover:underline flex items-center gap-1 ${
                  isDark ? 'text-indigo-400' : 'text-indigo-600'
                }`}
              >
                <X className="w-4 h-4" />
                Clear all
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 min-w-0">
            <div className="min-w-0">
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Program
              </label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 min-w-0 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="all">All Programs</option>
              </select>
            </div>

            <div className="min-w-0">
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 min-w-0 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {types.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0">
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 min-w-0 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {statuses.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
