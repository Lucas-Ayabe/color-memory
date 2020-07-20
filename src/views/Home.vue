<template>
  <div class="home">
    <l-section>
      <l-container>
        <h1 class="title">Color Palettes</h1>

        <transition name="fade">
          <c-loader v-if="isWaiting" fullscreen />
        </transition>

        <transition name="fade">
          <l-grid v-if="!isWaiting">
            <l-grid-item
              sm="6"
              md="4"
              lg="3"
              v-for="pallete in palletes"
              :key="pallete.id"
            >
              <c-card style="height: 100%;" footer>
                <c-color-pallete :colors="pallete.colors"></c-color-pallete>
                <h4>{{ pallete.name }}</h4>
                <p>{{ pallete.description }}</p>

                <template v-slot:footer>
                  <c-button :to="`pallete/${pallete.id}`" tag="router-link"
                    >View pallete</c-button
                  >
                </template>
              </c-card>
            </l-grid-item>
          </l-grid>
        </transition>
      </l-container>
    </l-section>
  </div>
</template>

<script>
import LSection from "@/components/LSection.vue";
import LContainer from "@/components/LContainer.vue";
import LGrid from "@/components/LGrid.vue";
import LGridItem from "@/components/LGridItem.vue";
import CCard from "@/components/CCard.vue";
import CColorPallete from "@/components/CColorPallete.vue";
import CLoader from "@/components/CLoader.vue";
import CButton from "@/components/CButton.vue";

export default {
  name: "Home",
  components: {
    LSection,
    LContainer,
    LGrid,
    LGridItem,
    CCard,
    CColorPallete,
    CLoader,
    CButton
  },
  data() {
    return {
      palletes: []
    };
  },
  computed: {
    isWaiting() {
      return this.$store.state.loading;
    },
    statePalletes() {
      return this.$store.state.palletes;
    },
    search() {
      return this.$store.state.searchText;
    }
  },
  watch: {
    search() {
      const searchPalletes = ({ name }) => {
        if (this.search !== "") {
          return name.toLowerCase().includes(this.search.toLowerCase());
        }

        return true;
      };

      this.palletes = this.statePalletes.filter(searchPalletes);
    }
  },
  mounted() {
    new Promise(resolve => {
      resolve(this.$store.dispatch("fetchPalletes", "../api.json"));
    }).then(() => {
      this.palletes = this.statePalletes;
    });
  }
};
</script>
