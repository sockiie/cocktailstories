<template>
  <p style="color: white">List</p>
  <h1 style="color: white">Favorite Cocktails</h1>
  <div class="container">
    <div :key="drink.idDrink" v-for="drink in drinks">
      <Drink
        @show-details="$emit('show-details', drink)"
        @delete-drink="$emit('delete-drink', drink.idDrink)"
        class="item"
        :drink="drink"
      />
    </div>
  </div>
</template>

<script>
import Drink from "./Drink.vue";

export default {
  name: "Drinks",
  props: {
    drinks: Array,
  },
  components: {
    Drink,
  },
  emits: ["delete-drink", "show-details"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 5px;
}
</style>