import { ref, onMounted } from 'vue';

const useUsers = () => {
  const users = ref([]);
  const page = ref(1);
  const limit = ref(10);
  const isUsersLoading = ref(false);
  const fetchUsers = () => {
    isUsersLoading.value = true;
    fetch(`https://627e5e6e271f386ceff6c423.mockapi.io/users?page=${page.value}&limit=${limit.value}`)
      .then((res) => res.json())
      .then((data) => { users.value = data; })
      .catch((err) => console.log('Ошибка. Запрос не выполнен:', err))
      .finally(() => { isUsersLoading.value = false; });
  };

  onMounted(fetchUsers);
  return {
    users,
    page,
    limit,
    isUsersLoading,
  };
};

export default useUsers;
