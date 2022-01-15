<template>
 <Header />
 <body> 
 
   
  <router-view/>

</body>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
 
}

</script>

<style scoped>
.test{
  margin: 2% 10%;
}
</style>
