import { BookOpen, Moon, Sun } from 'lucide-react';
import StatsCard from './StatsCard';

const Header = ({ isDark, toggleTheme, stats }) => {
  return (
    <header
      className={`border-b sticky top-0 z-10 shadow-sm w-full overflow-x-hidden ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 min-w-0">
        <div className="flex items-center justify-between mb-4 min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            <div className="min-w-0">
              <h1
                className={`text-xl sm:text-2xl font-bold truncate ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                My Learning
              </h1>
              <p
                className={`text-sm truncate ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Track your progress and stay on schedule
              </p>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
              isDark
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2 min-w-0">
          <StatsCard
            label="Total Activities"
            value={stats.total}
            isDark={isDark}
            colorStyle={isDark ? 'bg-gray-700/50' : 'bg-gray-50'}
          />

          <StatsCard
            label="In Progress"
            value={stats.inProgress}
            isDark={isDark}
            colorStyle={
              isDark
                ? 'bg-blue-900/20 text-blue-400'
                : 'bg-blue-50 text-blue-600'
            }
          />

          <StatsCard
            label="Completed"
            value={stats.completed}
            isDark={isDark}
            colorStyle={
              isDark
                ? 'bg-green-900/20 text-green-400'
                : 'bg-green-50 text-green-600'
            }
          />

          <StatsCard
            label="Overdue"
            value={stats.overdue}
            isDark={isDark}
            colorStyle={
              isDark ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
