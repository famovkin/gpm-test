import { ref, computed } from 'vue';

const useSortedUsers = (users) => {
  const selectedFilter = ref('All');
  const filteredUsers = computed(() => {
    if (selectedFilter.value === 'All') {
      return users.value;
    }
    return [...users.value].filter((user) => user.designation === selectedFilter.value);
  });

  return {
    selectedFilter,
    filteredUsers,
  };
};

export default useSortedUsers;
