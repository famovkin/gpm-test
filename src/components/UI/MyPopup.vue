<template>
  <div
    class="popup"
    v-if="show"
    @click="closePopup"
    @keydown.esc="closePopup"
  >
    <div class="popup__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggle from '@/mixins/toggle';

export default {
  name: 'my-popup',
  mixins: [toggle],
};
</script>

<style scoped>
.popup {
  padding: 20px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.popup__content {
  margin: auto;
  background: #fff;
  border-radius: 12px;
  width: 500px;
  padding: 30px;
}
</style>
