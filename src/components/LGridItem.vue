<template>
  <div :class="['l-grid__item', columns, small, medium, large, extraLarge]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LGrid",
  props: {
    cols: {
      type: [String, Number],
      default: () => "auto"
    },
    sm: {
      type: [String, Number],
      default: () => "auto"
    },
    md: {
      type: [String, Number],
      default: () => "auto"
    },
    lg: {
      type: [String, Number],
      default: () => "auto"
    },
    xlg: {
      type: [String, Number],
      default: () => "auto"
    }
  },
  computed: {
    columns() {
      if (this.cols === "auto") return "";

      return `@--${this.cols}`;
    },
    small() {
      if (this.sm === "auto") return "";

      return `@sm--${this.sm}`;
    },
    medium() {
      if (this.md === "auto") return "";

      return `@md--${this.md}`;
    },
    large() {
      if (this.lg === "auto") return "";

      return `@lg--${this.lg}`;
    },
    extraLarge() {
      if (this.xlg === "auto") return "";

      return `@xlg--${this.xlg}`;
    }
  }
};
</script>

<style lang="scss" scoped>
%grid__item {
  padding: $gap;
}

.l-grid__item {
  @extend %grid__item;
  flex: 1;

  @for $i from 1 through $columns {
    &.\@--#{$i} {
      @extend %grid__item;
      flex: 0 0 col($i);
    }
  }
}

%responsive-item {
  flex: 0 0 100%;
}

@each $breakpoint, $value in $breakpoints {
  .l-grid__item.\@#{$breakpoint} {
    @extend %responsive-item;
  }

  @include min-width($breakpoint) {
    .l-grid__item.\@#{$breakpoint} {
      flex: 1;
    }
  }
}

@each $breakpoint, $value in $breakpoints {
  @for $i from 1 through $columns {
    .l-grid__item.\@#{$breakpoint}--#{$i} {
      @extend %responsive-item;
    }
  }

  @include min-width($breakpoint) {
    @for $i from 1 through $columns {
      .l-grid__item.\@#{$breakpoint}--#{$i} {
        flex: 0 0 col($i);
      }
    }
  }
}
</style>
