import { useMemo, useState } from 'react';
import { generateActivities } from '../utils/mockData';

export const useActivities = () => {
  const [activities] = useState(generateActivities());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const filteredActivities = useMemo(() => {
    let filtered = activities.filter((activity) => {
      const matchesSearch = activity.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesProgram =
        selectedProgram === 'all' || activity.program === selectedProgram;
      const matchesType =
        selectedType === 'all' || activity.type === selectedType;
      const matchesStatus =
        selectedStatus === 'all' || activity.status === selectedStatus;

      return matchesSearch && matchesProgram && matchesType && matchesStatus;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortBy === 'dueDate') {
        const aDate = a.dueDate || a.scheduledAt || a.lastActivity;
        const bDate = b.dueDate || b.scheduledAt || b.lastActivity;
        return new Date(aDate) - new Date(bDate);
      }
      return 0;
    });

    return filtered;
  }, [
    activities,
    searchQuery,
    selectedProgram,
    selectedType,
    selectedStatus,
    sortBy,
  ]);

  return {
    activities,
    filteredActivities,
    searchQuery,
    setSearchQuery,
    selectedProgram,
    setSelectedProgram,
    selectedStatus,
    setSelectedStatus,
    selectedType,
    setSelectedType,
    sortBy,
    setSortBy,
  };
};
