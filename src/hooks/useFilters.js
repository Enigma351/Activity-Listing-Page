export const useFilters = ({
  selectedProgram,
  selectedType,
  selectedStatus,
}) => {
  return [selectedProgram, selectedType, selectedStatus].filter(
    (f) => f !== 'all'
  ).length;
};
