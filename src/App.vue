<template>
  <div id="app">
    <pagination></pagination>
    <router-view/>
  </div>
</template>

<script>
import pagination from './components/pagination'
export default {
  name: 'App',
  components:{
    pagination
  }
}
</script>

<style>
body{
  width: 50%;
  margin: 0 auto;
  font-family: 'Indie Flower', cursive;
}
</style>
