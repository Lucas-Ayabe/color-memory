<template>
  <div class="create">
    <l-container>
      <l-section>
        <h1 class="title">Create</h1>

        <l-grid>
          <l-grid-item sm="8" md="7" lg="5">
            <c-card>
              <form @submit.prevent="savePallete" class="flow">
                <c-field v-model="name" c-id="name" c-name="name"
                  >Pallete name</c-field
                >
                <c-field
                  v-model="description"
                  c-id="description"
                  c-name="description"
                  type="textarea"
                  >Description</c-field
                >

                <div
                  v-for="(field, index) in fields"
                  :key="field.id"
                  class="create__group"
                >
                  <c-field
                    class="create__field"
                    type="color"
                    :c-id="field.id"
                    :c-name="field.id"
                    :value="field.color"
                    @input="$event => changeColor(field, $event, index)"
                  >
                    Color {{ index + 1 }}
                  </c-field>
                  <c-button @click.native="() => deleteField(index)" icon>
                    <img src="@/assets/x-circle.svg" alt="delete" />
                  </c-button>
                </div>

                <c-button @click.native="addField" block outline
                  >Add color</c-button
                >

                <c-button type="submit" style="margin-top: 2em;"
                  >Create pallete</c-button
                >
              </form>
            </c-card>
          </l-grid-item>

          <l-grid-item sm="8" md="5" lg="7">
            <c-color-pallete :colors="colors"></c-color-pallete>
          </l-grid-item>
        </l-grid>
      </l-section>
    </l-container>
  </div>
</template>

<script>
import LGrid from "@/components/LGrid.vue";
import LGridItem from "@/components/LGridItem.vue";
import LContainer from "@/components/LContainer.vue";
import LSection from "@/components/LSection.vue";
import CField from "@/components/CField.vue";
import CCard from "@/components/CCard.vue";
import CButton from "@/components/CButton.vue";
import CColorPallete from "@/components/CColorPallete.vue";
import { tail } from "@/helpers/array";

export default {
  name: "Create",
  components: {
    LGrid,
    LGridItem,
    LContainer,
    LSection,
    CField,
    CCard,
    CButton,
    CColorPallete
  },
  data() {
    return {
      name: "",
      description: "",
      color1: "",
      colors: [],
      fields: []
    };
  },
  computed: {
    palletes() {
      return this.$store.state.palletes;
    }
  },
  methods: {
    resetFieldIndexes() {
      this.fields = this.fields.map((field, index) => {
        return {
          ...field,
          id: `color-${index}`,
          name: `color-${index}`
        };
      });
    },
    getLastIndex() {
      const lastField = tail(this.fields);
      return this.fields.length > 0 ? lastField.index + 1 : this.fields.length;
    },
    creteColorField() {
      const index = this.getLastIndex();
      return {
        id: `color-${index}`,
        name: `color-${index}`,
        index,
        color: "#000000"
      };
    },
    addColor(color) {
      this.colors.push(color);
    },
    addField() {
      this.fields.push(this.creteColorField());
      this.resetFieldIndexes();
      this.colors.push(tail(this.fields).color);
    },
    deleteField(index) {
      this.fields = this.fields.filter((_, i) => i !== index);
      this.colors = this.colors.filter((_, i) => i !== index);
      this.resetFieldIndexes();
    },
    changeColor(field, color, index) {
      field.color = color;
      this.colors[index] = color;
      this.colors.push("#000000");
      this.colors.pop();
    },
    savePallete() {
      const { name, description } = this;
      const colors = [...this.colors];
      const initialIndex = this.palletes.length > 0 ? this.palletes[0].id : 1;

      const lastPalleteIndex = this.palletes.reduce((last, pallete, _, arr) => {
        if (arr.length > 0) {
          return Math.max(+pallete.id, last);
        } else {
          return 1;
        }
      }, initialIndex);

      const pallete = {
        id: lastPalleteIndex + 1,
        name,
        description,
        colors
      };

      const palletes = [...this.palletes, pallete];

      this.$store.commit("UPDATE_PALLETES", palletes);
      this.$router.push({ name: "Home" });
    }
  },
  created() {
    this.$store.dispatch("fetchPalletes", "../api.json");
  },
  mounted() {
    this.addField();
  }
};
</script>

<style lang="scss" scoped>
.create {
  &__group {
    display: flex;
  }

  &__field {
    flex: 1;
  }
}
</style>
