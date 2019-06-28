<template>
  <div class='container'>
    <transition name="slide">
    <ul v-if=!isLoading>
      <li v-for="(item, i) in items" :key=i>
        <a class="urlBlock" :href='`https://www.reddit.com${item.data.permalink}`'>
        <p>Posted by u/{{item.data.author}}</p>
        <h2>{{item.data.title}}</h2>
        <div class="urlSize">
        <a class="urlNews" :href='item.data.url'  target="_blank">{{item.data.url}}</a>
        </div>
        </a>
      </li>
      <li v-if='!isLoading ? items.length < dontChangeThisNumber && pageCount > dontChangeThisNumber : false'>
      <h2>Новости закончились</h2>
      </li>
    </ul>
    </transition>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'EverythingNews',
  created(){
        this.$store.dispatch('loadItems')
  },
  mounted() {
    this.$root.$on('loaditems', (value) => {
      this.$store.dispatch('loadItems', (value))
    })
  },
  computed: mapState({
    items: state => state.items,
    isLoading: state => state.isLoading,
    afterItems: state => state.afterItems,
    pageCount: state => state.countForAPI,
    dontChangeThisNumber: state => state.dontChangeThisNumber
  })
}
</script>

<style scoped>
.container{
  margin-top: 10px;
}

ul{
  margin: 0;
  padding: 0;
  list-style-type: none;
  
}
.urlBlock{
  display: block;
  height: 100%;
}
.urlBlock:link,
.urlBlock:hover,
.urlBlock:active,
.urlBlock:visited{
  text-decoration: none;
  color: black;
}

p{
  margin: 0;
  padding: 0;
  font-style: italic;
  font-size: 100%;
}
h2{
  margin: 10px 0;
}
li{
  border-bottom: 1px solid #A6A6A6;
  margin-bottom: 15px;
  padding: 5px 0;
  background-color: white;
}

.urlNews:link,
.urlNews:active,
.urlNews:visited{
  text-decoration: none;
  color:#86A1FD;
}

.urlNews:hover{
  text-decoration: underline;
}

.urlSize{
  width: 40%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slide-enter-active {
  transition: all .5s ease;
}
.slide-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
