<template>
  <div class="c-color-pallete">
    <span
      v-for="(color, index) in colors"
      :key="index"
      :style="{ background: color, color: yiqContrast(color) }"
      class="c-color-pallete__color"
    >
      {{ color }}
    </span>
  </div>
</template>

<script>
import yiqContrast from "@/helpers/yiqContrast";
export default {
  name: "CColorPallete",
  props: {
    colors: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    yiqContrast(color) {
      return yiqContrast(color);
    }
  }
};
</script>

<style lang="scss" scoped>
.c-color-pallete {
  display: flex;
  border: 1px solid #ddd;

  &__color {
    text-align: center;
    flex: 1;
    overflow: hidden;
    text-indent: -100vmax;
    padding: 5px 0;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover {
      text-indent: 0;
      flex: 10;
    }
  }
}
</style>
