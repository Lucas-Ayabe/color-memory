<template>
  <div class="l-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LContainer"
};
</script>

<style lang="scss" scoped>
.l-container {
  padding-left: $gap;
  padding-right: $gap;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 100%;

  @include min-width(md) {
    max-width: 768px;
  }

  @include min-width(lg) {
    max-width: 960px;
  }

  @include min-width(xlg) {
    max-width: 1140px;
  }
}
</style>
