<template class="template">
  <el-card :body-style="{ padding: '0px' }">
    <div>
      <img :src="drink.strDrinkThumb" class="image" />
    </div>
    <div style="padding: 5px">
      <h3 class="cardtextstyle">{{ drink.strDrink }}</h3>
      <p>Category: {{ drink.strCategory }}</p>
      <div class="bottom">
        <el-button @click="$emit('show-details', drink)" type="info" size="small" round>Open</el-button>
        <el-button @click="$emit('delete-drink', drink.idDrink)" size="small" round>Delete</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Drink",
  props: {
    drink: Object,
  },
};
</script>

<style scope>
.cardtextstyle {
  margin-block-end: 0em;
  margin-block-start: 0em;
}

.fas {
  color: red;
}

.drink {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.drink.reminder {
  border-left: 5px solid green;
}

.drink h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.image {
  max-width: 250px;
  max-height: 100%;
}
</style>