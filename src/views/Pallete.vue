<template>
  <div class="pallete">
    <transition name="fade">
      <c-loader v-if="isWaiting" fullscreen />
    </transition>

    <transition name="fade">
      <l-container v-if="!isWaiting">
        <l-section>
          <l-grid>
            <l-grid-item md="6">
              <div class="flow">
                <h1>{{ pallete.name }}</h1>
                <p>{{ pallete.description }}</p>
                <c-button @click.native="destroyPallete" color="danger" outline
                  >Delete pallete</c-button
                >
              </div>
            </l-grid-item>

            <l-grid-item md="6">
              <c-color-pallete :colors="pallete.colors"></c-color-pallete>
            </l-grid-item>
          </l-grid>
        </l-section>
      </l-container>
    </transition>
  </div>
</template>

<script>
import LContainer from "@/components/LContainer.vue";
import CLoader from "@/components/CLoader.vue";
import LSection from "@/components/LSection.vue";
import CColorPallete from "@/components/CColorPallete.vue";
import LGrid from "@/components/LGrid.vue";
import LGridItem from "@/components/LGridItem.vue";
import CButton from "@/components/CButton.vue";

export default {
  name: "Pallete",
  components: {
    LContainer,
    LSection,
    LGrid,
    LGridItem,
    CLoader,
    CColorPallete,
    CButton
  },
  data() {
    return {
      pallete: {}
    };
  },
  computed: {
    palletes() {
      return this.$store.state.palletes;
    },
    isWaiting() {
      return this.$store.state.loading;
    },
    palleteId() {
      return this.$route.params.id;
    }
  },
  watch: {
    palleteId() {
      this.initValues();
    }
  },
  methods: {
    initValues() {
      const loadPalletes = new Promise(resolve => {
        resolve(this.$store.dispatch("fetchPalletes", "../api.json"));
      });

      loadPalletes.then(() => {
        this.pallete = this.palletes.find(({ id }) => {
          return +id === +this.palleteId;
        });
      });
    },
    destroyPallete() {
      const palletes = this.palletes.filter(({ id }) => id !== this.pallete.id);
      this.$store.commit("UPDATE_PALLETES", palletes);
      this.$router.push({ name: "Home" });
    }
  },
  mounted() {
    this.initValues();
  }
};
</script>
