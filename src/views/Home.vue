<template>
  <el-container>
    <img class="size" src="@/assets/homeimage.jpg" />
    <div class="picturetext">
      <div>
        <p style="color: white">Get your Cocktail</p>
        <h1 class="space" style="color: white">
          Cocktail Stories where you get amazing Cocktail Recieps!
        </h1>
      </div>
    </div>
  </el-container>
  <p class="longtext" style="color: white">
    Welcome to Cocktail Stories where creating amazing cocktails at home has
    never been so easy, affordable and fun! Using our free random cocktail
    generator, we guarantee you will spend more time enjoying your cocktails
    instead of searching online for what you can make. <br /><br /><br /><b
      >Enjoy!</b
    >
  </p>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
};
</script>

<style>
.size {
  width: 50%;
  height: auto;
}
.picturetext {
  margin-left: 2%;
  display: flex;
  align-items: center;
}
.longtext {
  margin: 10%;
  text-align: center;
}
</style>
