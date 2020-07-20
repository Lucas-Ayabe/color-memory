<template>
  <header class="navbar">
    <l-container class="navbar__container">
      <router-link class="navbar__brand brand" to="/">COLOR MEMORY</router-link>
      <nav class="nav" id="nav">
        <router-link class="nav__link" to="/">palletes</router-link>
        <!-- <router-link class="nav__link" to="/create">New styleguide</router-link> -->
        <router-link class="nav__link" to="/create">New pallete</router-link>
      </nav>
      <c-search v-model="search" class="navbar__search" />
    </l-container>
  </header>
</template>

<script>
import LContainer from "@/components/LContainer.vue";
import CSearch from "@/components/CSearch";

export default {
  name: "TheNav",
  components: {
    LContainer,
    CSearch
  },
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search() {
      this.$store.commit("UPDATE_SEARCH_TEXT", this.search);
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 4px 0 8px rgba(80, 80, 80, 0.3);

  &__brand {
    margin-top: $gap;

    @include min-width(md) {
      margin-top: 0;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    @include min-width(md) {
      flex-direction: row;
    }
  }

  &__search {
    margin-left: auto;
    margin-right: auto;

    @include min-width(md) {
      margin-left: auto;
    }
  }
}

.nav {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  overflow-y: auto;

  &__link {
    display: inline-block;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    text-transform: uppercase;
    font-family: $family;
    text-align: left;
    color: $primary;
    font-size: 1em;
    font-weight: 500;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: mix(#fff, $primary, 50%);
    }
  }

  &__link + &__link {
    margin-left: 0.5em;
  }

  &__link + &__link::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 0.5em;
    background: $primary;
  }
}
</style>
