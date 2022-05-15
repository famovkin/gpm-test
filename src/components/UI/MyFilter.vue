<template>
  <ul class="filter">
    <li
      class="filter__item"
      tabindex="0"
      @click="onClickFilter(option)"
      @keydown.enter="onClickFilter(option)"
      v-for="option in options"
      :key="option.id"
      :class="{'filter__item_active': selectedFilter === option.value}"
      >
      {{ option.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'my-filter',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selectedFilter: String,
  },
  methods: {
    onClickFilter(option) {
      this.$emit('change', option.value);
    },
  },
};
</script>

<style scoped>
.filter {
  list-style: none;
  display: flex;
  border-bottom: 2px solid #d7dce5;
  margin-bottom: 45px;
  overflow-x: auto;
}

.filter__item {
  padding: 25px 10px;
  margin-right: 28px;
  color: #b5bbc9;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
}

.filter__item_active {
  border-bottom: 2px solid #00dc81;
  color: #2b3a5a;
}
</style>
