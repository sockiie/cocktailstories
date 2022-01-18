<template>
  <div>
    <DrinkDetails :randomcocktails="randomcocktails" />
    <el-container class="center">
      <el-button @click="next" round>Next</el-button>
      <el-button @click="addDrink" round>Favorite</el-button>
    </el-container>
  </div>
</template>

<script>
import DrinkDetails from "../components/DrinkDetails.vue";
export default {
  name: "Cocktails",
  components: {
    DrinkDetails,
  },
  data() {
    return {
      randomcocktails: [],
    };
  },
  methods: {
    async fetchrandomCocktail() {
      const res = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );

      const data = await res.json();

   
      return data.drinks[0];
    },

    async next() {
      this.randomcocktails = await this.fetchrandomCocktail();
    },

    async addDrink() {

      if (confirm("Are you sure?")) {
        const res = await fetch("api/drinks", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(this.randomcocktails),
        });

        const data = await res.json();

        this.randomcocktails = data;
      }
    },
  },

  async created() {
    this.randomcocktails = await this.fetchrandomCocktail();
  },
};
</script>

<style scoped>
.center {
  margin: 3% 20%;
}
</style>


