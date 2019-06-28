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
#app{
  width: calc(100% - 30px);
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Libre Baskerville', serif;
}
</style>
