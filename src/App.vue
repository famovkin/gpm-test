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
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterOptions: [
        { id: 1, name: 'Employees List', value: 'All' },
        { id: 2, name: 'Management', value: 'Manager' },
        { id: 3, name: 'Development', value: 'Developer' },
        { id: 4, name: 'Architecture', value: 'Architect' },
      ],
      selectedFilter: 'All',
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
  background: #f6f8fc;
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
