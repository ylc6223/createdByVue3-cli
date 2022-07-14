import { ref, computed } from "vue";

export default function useRepositoryFilters(searchQuery) {
  const filters = ref({});
  const filteredRepositories = computed(() => {
    return {};
  });
  const updateFilters = () => {};
  return {
    filters,
    updateFilters,
    filteredRepositories,
  };
}
