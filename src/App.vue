<template>
  <div id="app" class="app">
    <the-nav class="app__nav" />

    <div class="app__content">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import TheNav from "@/components/TheNav";

export default {
  name: "App",
  components: {
    TheNav
  }
};
</script>

<style lang="scss">
:root {
  font-size: 16px;
  --blue: #{$blue};
  --primary: #{$primary};
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: $family;
  font-size: 1em;
}

a {
  color: var(--primary);
  text-decoration: none;
}

.app {
  background: $light;
  height: 100vh;
  -webkit-display: grid;
  -moz-display: grid;
  -ms-display: grid;
  -o-display: grid;
  display: grid;
  grid-template-rows: auto 1fr;

  &__nav {
    z-index: 1;
  }

  &__content {
    max-height: calc(100vh - 154px);
    overflow-y: auto;
    z-index: 0;

    @include min-width(md) {
      max-height: calc(100vh - 60px);
    }
  }
}

.brand {
  font-size: 1em;
  font-weight: 800;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
}

.title {
  font-size: 2em;
  font-weight: 700;
  line-height: 1.2;

  &--small {
    font-size: 1.25em;
  }
}

.flow > * + * {
  margin-top: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, -30px, 0);
}
</style>
