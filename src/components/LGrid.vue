<template>
  <div class="l-grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LGrid"
};
</script>

<style lang="scss" scoped>
.l-grid {
  display: flex;
  flex-wrap: wrap;
  margin-left: $gap * -1;
  margin-right: $gap * -1;
}
</style>
