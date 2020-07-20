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
  border: 1px solid #ddd;

  &__color {
    border: 0 solid transparent;
    font-family: $family;
    font-size: 1rem;
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
