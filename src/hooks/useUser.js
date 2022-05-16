import { ref, onMounted } from 'vue';
import api from '@/utils/api';

const useUsers = (id) => {
  const user = ref({});
  const isUserLoading = ref(false);
  const fetchUser = () => {
    isUserLoading.value = true;
    api.getUser(id)
      .then((data) => { user.value = data; })
      .catch((err) => console.log('Ошибка. Запрос не выполнен:', err))
      .finally(() => { isUserLoading.value = false; });
  };

  onMounted(fetchUser);
  return {
    user,
    isUserLoading,
  };
};

export default useUsers;
