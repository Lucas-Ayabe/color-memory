<template>
  <div :class="['loader', fullscreen ? 'fullscreen' : '']">
    <span class="loader__ball"></span>
    <span class="loader__ball"></span>
    <span class="loader__ball"></span>
  </div>
</template>

<script>
export default {
  name: "CLoader",
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;

  &.fullscreen {
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
  }

  &__ball {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: $primary;
    animation: loader 0.5s ease-in-out alternate infinite;

    &:nth-child(2) {
      animation: loader 0.5s ease-in-out 0.75s alternate-reverse infinite;
    }

    &:nth-child(3) {
      animation: loader 0.5s ease-in-out 1s alternate-reverse infinite;
    }
  }

  &__ball + &__ball {
    margin-left: 1em;
  }
}

@keyframes loader {
  from {
    transform: translate3d(0, -30px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
