<template>
  <div class="c-color-pallete">
    <c-color-pallete-color
      v-for="(color, index) in colors"
      :key="index"
      :color="color"
    />
  </div>
</template>

<script>
import CColorPalleteColor from "@/components/CColorPalleteColor";
export default {
  name: "CColorPallete",
  components: {
    CColorPalleteColor
  },
  props: {
    colors: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.c-color-pallete {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ddd;
}
</style>
