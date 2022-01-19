<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#000000"
    text-color="#D3D3D3"
    active-text-color="#FFFFFF"
    router="true"
    @select="handleSelect">
    <el-container>
      <el-container>
        <h4 class="marginleft" style="color: white">Cocktail Stories</h4>
        <el-container class="flex">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/Cocktails">Cocktails</el-menu-item>
          <el-menu-item class="radius" index="/Favorites"
            >Favorites</el-menu-item>
        </el-container>
      </el-container>
    </el-container>
  </el-menu>
  <div class="line"></div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>
<style scoped>
.flex {
  justify-content: flex-end;
  margin-right: 30px;
}
.marginleft {
  margin-left: 30px;
}
</style>


