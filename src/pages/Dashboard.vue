<template>
  <div class="app">
    <div class="header">
      <h1>Dashboard</h1>
      <my-button @click='openPopup'>
        + Add employee
      </my-button>
    </div>
    <my-filter
      :options="filterOptions"
      :selectedFilter="selectedFilter"
      @change="changeFilter"
    />
    <users-list
      v-if='!isUsersLoading'
      :users="filteredUsers"
      @remove='removeUser'
    />
    <my-preloader v-else/>
  </div>
  <!-- наблюдаемый блок для перехода на следующую страницу -->
  <div
    v-if='!isUsersLoading && !isUsersEnd'
    class="observer"
    ref="observer"
    v-intersection="{
      cb: loadMoreUsers,
      usersCount: this.users.length,
      selectedFilter: this.selectedFilter,
    }"/>
  <my-popup v-model:show="isPopupOpen">
    <user-form
      @add='addUser'
      :isLoading="isReqLoading"
    />
  </my-popup>
</template>

<script>
import UsersList from '@/components/UsersList.vue';
import UserForm from '@/components/UserForm.vue';
import api from '@/utils/api';

export default {
  name: 'dash-board',
  components: {
    UsersList, UserForm,
  },
  data() {
    return {
      filterOptions: [
        { id: 1, name: 'Employees List', value: 'All' },
        { id: 2, name: 'Management', value: 'Manager' },
        { id: 3, name: 'Development', value: 'Developer' },
        { id: 4, name: 'Architecture', value: 'Architect' },
      ],
      selectedFilter: 'All',
      isUsersLoading: false,
      isPopupOpen: false,
      isReqLoading: false,
      users: [],
      page: 1,
      limit: 10,
      totalPages: 0,
      // флаг для прекращения подгрузки новых пользователей
      isUsersEnd: false,
    };
  },
  methods: {
    openPopup() {
      this.isPopupOpen = true;
    },
    addUser(user) {
      this.isReqLoading = true;
      api.createUser(user)
        .then((data) => {
          // пушим нового пользователя только, если он есть на просмотренных страницах
          if (this.users.length + 1 <= this.page * this.limit) {
            this.users.push(data);
          }
        })
        .catch((err) => console.log('Ошибка. Запрос не выполнен:', err))
        .finally(() => {
          this.isReqLoading = false;
          this.isPopupOpen = false;
        });
    },
    removeUser(deletedUser) {
      api.deleteUser(deletedUser.id)
        .then((data) => { this.users = this.users.filter((user) => user.id !== data.id); })
        .catch((err) => console.log('Ошибка. Запрос не выполнен:', err));
    },
    changeFilter(filter) {
      this.selectedFilter = filter;
    },
    fetchUsers() {
      this.isUsersLoading = true;
      fetch(`https://627e5e6e271f386ceff6c423.mockapi.io/users?page=${this.page}&limit=${this.limit}`)
        .then((res) => res.json())
        .then((data) => { this.users = data; })
        .catch((err) => console.log('Ошибка. Запрос не выполнен:', err))
        .finally(() => { this.isUsersLoading = false; });
    },
    loadMoreUsers() {
      this.page += 1;
      const currentUsersCount = this.users.length;
      fetch(`https://627e5e6e271f386ceff6c423.mockapi.io/users?page=${this.page}&limit=${this.limit}`)
        .then((res) => res.json())
        .then((data) => {
          this.users = [...this.users, ...data];
          // проверка на окончание новых пользователей для подгрузки
          if (currentUsersCount === this.users.length) {
            this.isUsersEnd = true;
          }
        })
        .catch((err) => console.log('Ошибка. Запрос не выполнен: ', err));
    },
  },
  mounted() {
    this.fetchUsers();
  },
  computed: {
    filteredUsers() {
      if (this.selectedFilter === 'All') {
        return this.users;
      }
      return [...this.users].filter((user) => user.designation === this.selectedFilter);
    },
  },
};
</script>

<style>
.app {
  padding: 70px 50px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #434f64;
  margin-bottom: 10px;
}

.observer {
  height: 1px;
}
</style>
