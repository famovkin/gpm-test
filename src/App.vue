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
      :users="users"
    />
  </div>
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
      users: [
        {
          about: 'I would introduce myself in few words. Passionate coder, beginner runner, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely.',
          avatar: 'https://images.unsplash.com/photo-1552323356-322f06b49db4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60',
          designation: 'Planner',
          email: 'inezwilkinsongmail.com',
          employeeCode: '71484-2390',
          id: '1',
          joiningDate: '2021-06-21T18:32:58.719Z',
          name: 'Inez Wilkinson',
          phone: '1-886-942-9803',
        },
        {
          about: 'I would introduce myself in few words. Passionate coder, beginner runner, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely.',
          avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
          designation: 'Analyst',
          email: 'randysatterfieldgmail.com',
          employeeCode: '16295',
          id: '2',
          joiningDate: '2021-06-21T18:14:48.689Z',
          name: 'Randy Satterfield',
          phone: '914.951.7503 x181',
        },
        {
          about: 'I would introduce myself in few words. Passionate coder, beginner runner, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely.',
          avatar: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60',
          designation: 'Coordinator',
          email: 'misshazelpfeffergmail.com',
          employeeCode: '86030-0942',
          id: '3',
          joiningDate: '2021-06-21T22:10:55.912Z',
          name: 'Miss Hazel Pfeffer',
          phone: '1-917-421-7610 x632',
        },
        {
          about: 'I would introduce myself in few words. Passionate coder, beginner runner, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely.',
          avatar: 'https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60',
          designation: 'Developer',
          email: 'joshuashieldsgmail.com',
          employeeCode: '46285-8173',
          id: '4',
          joiningDate: '2021-06-22T04:51:40.467Z',
          name: 'Joshua Shields',
          phone: '1-915-734-7079',
        },
        {
          about: 'I would introduce myself in few words. Passionate coder, beginner runner, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely.',
          avatar: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60',
          designation: 'Coordinator',
          email: 'dr.jennyhyattgmail.com',
          employeeCode: '42117',
          id: '5',
          joiningDate: '2021-06-21T07:57:35.849Z',
          name: 'Dr. Jenny Hyatt',
          phone: '(970) 439-3913 x4219',
        },
      ],
    };
  },
  methods: {
    changeFilter(filter) {
      this.selectedFilter = filter;
    },
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
  background: #e9ebef;
}

.app {
  padding: 70px 50px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2b3a5a;
  margin-bottom: 10px;
}
</style>
