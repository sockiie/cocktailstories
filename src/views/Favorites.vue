<template>
  <el-row>
    <el-col :span="24">
      <div v-show="details">
        <Drinks
          @show-details="showdetails"
          @delete-drink="deleteDrink"
          :drinks="drinks"
        />
      </div>
      <div v-show="!details">
        <DrinkDetails :randomcocktails="randomcocktails" />
      </div>
    </el-col>
  </el-row>
</template>


<script>
import DrinkDetails from "../components/DrinkDetails.vue";
import Drinks from "../components/Drinks.vue";

export default {
  name: "Favorites",
  components: {
    Drinks,
    DrinkDetails,
  },
  data() {
    return {
      drinks: [],
      details: true,
      randomcocktails: [],
    };
  },
  methods: {
    async showdetails(drink) {
      this.details = !this.details;
      console.log(drink);

      this.randomcocktails = await this.fetchDetail(drink);
      //console.log(this.randomcocktails);
    },

    async fetchDetail(drink) {
      const data = await drink;
      console.log(data);
      return data;
    },

    async fetchDrink(idDrink) {
      const res = await fetch(`api/drinks/${idDrink}`);

      const data = await res.json();

      return data;
    },

    async fetchDrinks() {
      const res = await fetch("api/drinks");

      const data = await res.json();
      console.log(data);
      return data;
    },

    async deleteDrink(idDrink) {
      console.log(idDrink);
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/drinks/${idDrink}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.drinks = this.drinks.filter(
              (drink) => drink.idDrink !== idDrink
            ))
          : alert("Error deleting task");
      }
    },
  },

  async created() {
    this.drinks = await this.fetchDrinks();
  },
};
</script>

