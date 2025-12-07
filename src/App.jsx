import ActivityCard from './components/ActivityCard';
import { useActivities } from './hooks/useActivities';
import { useFilters } from './hooks/useFilters';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import EmptyState from './components/EmptyState';

const App = () => {
  const {
    activities,
    filteredActivities,
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
  } = useActivities();

  const { isDark, toggleTheme } = useTheme();

  const activeFiltersCount = useFilters({
    selectedProgram,
    selectedType,
    selectedStatus,
  });

  const clearAllFilters = () => {
    setSelectedProgram('all');
    setSelectedType('all');
    setSelectedStatus('all');
    setSearchQuery('');
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        stats={{
          total: activities.length,
          inProgress: activities.filter((a) => a.status === 'in_progress')
            .length,
          completed: activities.filter((a) => a.status === 'completed').length,
          overdue: activities.filter((a) => a.status === 'overdue').length,
        }}
      />

      <FilterPanel
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
        activeFiltersCount={activeFiltersCount}
        isDark={isDark}
      />

      <main className="max-w-7xl mx-auto px-4 py-6 overflow-x-hidden">
        {filteredActivities.length === 0 ? (
          <EmptyState clearFilters={clearAllFilters} isDark={isDark} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                isDark={isDark}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
