<template>
  <button class="more-button">
    <span class="more-button__dot"></span>
    <span class="more-button__dot"></span>
    <span class="more-button__dot"></span>
  </button>
</template>

<script>
export default {
  name: 'my-more-button',
};
</script>

<style scoped>
.more-button {
  flex: .5;
  height: 20px;
  width: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;
  min-width: 25px;
}

.more-button__dot {
  top: 10px;
  left: 50%;
  width: 5px;
  height: 5px;
  background: #b5bbc9;
  border-radius: 50%;
}
</style>
