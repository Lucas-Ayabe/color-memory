<template>
  <section class="section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "LSection"
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 32px;
  padding-bottom: 32px;
}
</style>
