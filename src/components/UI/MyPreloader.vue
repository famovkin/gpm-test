<template>
  <div class="preloader">
    <div class="preloader__content">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-preloader',
};
</script>

<style>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .4);
}
.preloader__content {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.preloader__content div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #00dc81;
  border-radius: 50%;
  animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #00dc81 transparent transparent transparent;
}
.preloader__content div:nth-child(1) {
  animation-delay: -0.45s;
}
.preloader__content div:nth-child(2) {
  animation-delay: -0.3s;
}
.preloader__content div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
