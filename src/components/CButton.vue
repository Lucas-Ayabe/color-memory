<template>
  <router-link v-if="isRouterLink" :to="to" :class="classList">
    <slot></slot>
  </router-link>

  <a v-else-if="isLink" :class="classList">
    <slot></slot>
  </a>

  <button v-else :type="type" :class="classList">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CButton",
  props: {
    tag: {
      type: String,
      default: "button"
    },
    to: {
      type: String,
      default: "/"
    },
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: () => false
    },
    outline: {
      type: Boolean,
      default: () => false
    },
    icon: {
      type: Boolean,
      default: () => false
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    classList() {
      const color = `-${this.color}`;
      const block = this.block ? "-block" : "";
      const outline = this.outline ? "-outline" : "";

      if (this.icon) {
        return ["c-button", "c-button--icon"];
      }

      return ["c-button", color, block, outline];
    },
    isRouterLink() {
      return this.tag === "router-link";
    },
    isLink() {
      return this.tag === "a";
    }
  }
};
</script>

<style lang="scss" scoped>
.c-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1em;
  font-family: $family;
  padding: 0.45em 1.45em;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
  }

  &.-block {
    display: flex;
    width: 100%;
  }

  &.-primary {
    background: $primary;
    box-shadow: 0 2px 4px getRgba(mix(#000, $primary, 90%), 0.3);
    color: color-yiq($primary);

    &:focus {
      box-shadow: 0 4px 8px getRgba(mix(#000, $primary, 98%), 0.3);
    }

    &:hover {
      background: mix(#fff, $primary, 10%);
      box-shadow: 0 4px 8px getRgba(mix(#000, $primary, 98%), 0.3);
    }

    &:active {
      background: mix(#fff, $primary, 30%);
      box-shadow: 0 7px 14px getRgba(mix(#000, $primary, 98%), 0.3);
    }
  }

  &.-danger {
    background: $danger;
    box-shadow: 0 2px 4px getRgba(mix(#000, $danger, 90%), 0.3);
    color: color-yiq($danger);

    &:focus {
      box-shadow: 0 4px 8px getRgba(mix(#000, $danger, 98%), 0.3);
    }

    &:hover {
      background: mix(#fff, $danger, 10%);
      box-shadow: 0 4px 8px getRgba(mix(#000, $danger, 98%), 0.3);
    }

    &:active {
      background: mix(#fff, $danger, 30%);
      box-shadow: 0 7px 14px getRgba(mix(#000, $danger, 98%), 0.3);
    }
  }

  &.-outline {
    border: 1px solid currentColor;
    background: transparent;
    box-shadow: 0 0 0 transparent;
  }

  &.-primary.-outline {
    color: $primary;

    &:hover {
      border-color: transparent;
      color: color-yiq($primary);
    }
  }

  &.-danger.-outline {
    color: $danger;

    &:hover {
      border-color: transparent;
      color: color-yiq($danger);
    }
  }

  &--icon {
    padding: 0.5em;
  }
}
</style>
