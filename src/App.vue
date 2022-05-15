<template>
  <div class="app">
    <div class="header">
      <h1>Dashboard</h1>
      <my-button>+ Add employee</my-button>
    </div>
    <my-filter
      :options="filterOptions"
      :selectedFilter="selectedFilter"
      @change="changeFilter"
    />
    <users-list
      v-if='!isUsersLoading'
      :users="users"
    />
    <my-preloader v-else/>
  </div>
  <!-- наблюдаемый блок для перехода на следующую страницу -->
  <div class="observer" ref="observer"/>
</template>

<script>
import UsersList from '@/components/UsersList.vue';

export default {
  components: {
    UsersList,
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
      users: [],
      page: 1,
      limit: 10,
      totalPages: 0,
      // флаг для прекращения подгрузки новых пользователей
      isUsersEnd: false,
    };
  },
  methods: {
    changeFilter(filter) {
      this.selectedFilter = filter;
    },
    async fetchUsers() {
      this.isUsersLoading = true;
      fetch(`https://627e5e6e271f386ceff6c423.mockapi.io/users?page=${this.page}&limit=${this.limit}`)
        .then((res) => res.json())
        .then((data) => { this.users = data; })
        .catch((err) => { console.log('Ошибка. Запрос не выполнен:', err); })
        .finally(() => { this.isUsersLoading = false; });
    },
    async loadMoreUsers() {
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
        .catch((err) => { console.log('Ошибка. Запрос не выполнен: ', err); });
    },
  },
  mounted() {
    this.fetchUsers();
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.users.length !== 0 && !this.isUsersEnd) {
        this.loadMoreUsers();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer?.observe(this.$refs.observer);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  min-width: 425px;
  background: #f6f8fc;
}

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
