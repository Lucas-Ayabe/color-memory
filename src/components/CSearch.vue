<template>
  <form class="search">
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      type="text"
      class="search__input"
    />
    <button type="button" class="search__button">
      <img src="@/assets/search.svg" alt="" />
    </button>
  </form>
</template>

<script>
export default {
  name: "CSearch",
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Search something..."
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  background: #fff;
  position: relative;
  display: flex;

  &__input {
    flex: 1;
    font-size: 1em;
    padding: 1em 1.5em;
    padding-right: calc(1.5em + 24px);
    border-radius: 0;
    border: 2px solid transparent;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 2px solid transparent;

    &:focus {
      outline: none;
    }
  }

  &__button {
    cursor: context-menu;
    background: transparent;
    border: 0 solid transparent;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
}
</style>
