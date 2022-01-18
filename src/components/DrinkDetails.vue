<template>
  <div class="center">
    <p style="color: white">Random Cocktail</p>
    <h1 style="color: white">{{ randomcocktails.strDrink }}</h1>
    <el-container>
      <img :src="randomcocktails.strDrinkThumb" class="image" />
      <div>
        <el-container>
          <div>
            <p class="space" style="color: white"><b>Category:</b></p>
            <p class="space" style="color: white"><b>Glass: </b></p>
            <p class="space" style="color: white"><b>Ingredients:</b></p>
          </div>
          <div>
            <p class="space" style="color: white">
              {{ randomcocktails.strCategory }}
            </p>
            <p class="space" style="color: white">
              {{ randomcocktails.strGlass }}
            </p>
            <p class="space" style="color: white">
              {{ randomcocktails.strIngredient1 }}<br />{{
                randomcocktails.strIngredient2
              }}<br />{{ randomcocktails.strIngredient3 }}<br />{{
                randomcocktails.strIngredient4
              }}<br />{{ randomcocktails.strIngredient5 }}<br />{{
                randomcocktails.strIngredient6
              }}<br />{{ randomcocktails.strIngredient7 }}<br />{{
                randomcocktails.strIngredient8
              }}<br />{{ randomcocktails.strIngredient9 }}<br />{{
                randomcocktails.strIngredient10
              }}<br />{{ randomcocktails.strIngredient11 }}<br />{{
                randomcocktails.strIngredient12
              }}<br />{{ randomcocktails.strIngredient13 }}<br />{{
                randomcocktails.strIngredient14
              }}<br />{{ randomcocktails.strIngredient15 }}
            </p>
          </div>
        </el-container>
      </div>
    </el-container>
    <p style="color: white"><b>Instructions:</b></p>
    <p style="color: white">{{ randomcocktails.strInstructions }}</p>
  </div>
</template>


<script>
export default {
  name: "Cocktail",
  props: {
    randomcocktails: Object,
  },
  methods: {

  },
};
</script>

<style scoped>
.space {
  margin-left: 30px;
}

.center {
  margin: 3% 20%;
}
</style>