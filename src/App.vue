<template>
  <div class="app">
    <header class="header">
      <h1>Dashboard</h1>
      <my-button>+ Add employee</my-button>
    </header>
  </div>
</template>

<script>
export default {

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
}
</style>
