<template>
  <div :class="['c-field', `c-field--${type}`]">
    <label :for="cId" class="c-field__label">
      <slot></slot>
    </label>

    <input
      v-if="type !== 'textarea'"
      :name="cName"
      :id="cId"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="c-field__input"
    />

    <textarea
      v-if="type === 'textarea'"
      :name="cName"
      :id="cId"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="c-field__input"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "CField",
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    cName: {
      type: String,
      default: ""
    },
    cId: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.c-field {
  position: relative;

  &__label,
  &__input {
    display: block;
  }

  &__label {
    margin-bottom: 0.5em;
    cursor: pointer;
  }

  &__input {
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    font-family: $family;
    box-shadow: 0 1px 2px getRgba(mix(#000, $primary, 95%), 0.3);
    padding: 0.5em 0.75em;
    width: 100%;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 3px 6px getRgba(mix(#000, $primary, 95%), 0.3);
    }

    &:focus {
      border-color: getRgba($primary, 0.5);
      box-shadow: 0 5px 10px getRgba(mix(#000, $primary, 95%), 0.3);
      outline: 0 solid transparent;
    }
  }

  &__input[type="color"] {
    height: 30px;
    padding: 2px 3px;
    border-radius: 0;
    box-sizing: content-box;
    border: none;
  }

  &--color {
    display: flex;
    align-items: center;

    .c-field__label {
      margin: 0;
      margin-right: 1em;
      white-space: nowrap;
    }
  }
}

textarea.c-field__input {
  resize: vertical;
  height: 10ch;
}
</style>
