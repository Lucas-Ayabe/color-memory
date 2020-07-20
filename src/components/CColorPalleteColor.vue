<template>
  <button
    :style="{ background: color, color: yiqContrast(color) }"
    v-clipboard:copy="color"
    v-clipboard:success="onCopy"
    :class="['c-color-pallete__color', isCopied ? 'is-copied' : '']"
  >
    {{ text }}
  </button>
</template>

<script>
import yiqContrast from "@/helpers/yiqContrast";

export default {
  name: "CColorPalleteColor",
  props: {
    color: {
      type: String,
      default: "#000000"
    }
  },
  data() {
    return {
      text: "",
      isCopied: false
    };
  },
  methods: {
    yiqContrast(color) {
      return yiqContrast(color);
    },
    onCopy: function() {
      this.isCopied = true;
      this.text = "Just copied";

      setTimeout(() => {
        this.isCopied = false;
        this.text = this.color;
      }, 1000);
    }
  },
  mounted() {
    this.text = this.color;
  }
};
</script>

<style lang="scss" scoped>
.c-color-pallete__color {
  border: 0 solid transparent;
  cursor: pointer;
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

  &.is-copied {
    transform: scale(1.2);
    box-shadow: 0 3px 6px getRgba(mix(#000, $primary, 90%), 0.3);
  }
}
</style>
