import { ref, onMounted } from 'vue';
import api from '@/utils/api';

const useUsers = () => {
  const users = ref([]);
  const page = ref(1);
  const limit = ref(10);
  const isUsersLoading = ref(false);
  const fetchUsers = () => {
    isUsersLoading.value = true;
    api.getUsers(page.value, limit.value)
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
