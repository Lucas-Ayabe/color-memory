<template>
  <component :is="tag" :class="['c-card', hoverable ? 'is-hoverable' : '']">
    <template v-if="header">
      <header class="c-card__header">
        <slot name="header"></slot>
      </header>
    </template>

    <div class="c-card__body">
      <slot></slot>
    </div>

    <template v-if="footer">
      <div class="c-card__footer">
        <slot name="footer"></slot>
      </div>
    </template>
  </component>
</template>

<script>
export default {
  name: "CCard",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    header: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.c-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  box-shadow: 0 2px 4px rgba(80, 80, 80, 0.3);
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

  &__header,
  &__body,
  &__footer {
    padding: 1em;
  }

  &__footer {
    font-size: 0.9em;
    margin-top: auto;
    border-top: 1px solid hsl(235, 40%, 90%);
  }

  &__header {
    border-bottom: 1px solid hsl(235, 40%, 90%);
  }

  &__body > * + * {
    margin-top: 0.5em;
  }

  &.is-hoverable {
    box-shadow: 0 4px 8px hsla(235, 100%, 5%, 0.3);

    &:hover {
      box-shadow: 0 7px 14px hsla(235, 100%, 5%, 0.3);
    }
  }
}
</style>
