<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style scoped>
.button {
  border: none;
  border-radius: 4px;
  background: #00dc81;
  padding: 15px 20px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.button:hover {
  transform: scale(1.05);
}
</style>
