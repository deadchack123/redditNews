<template>
  <div class='container'>
    <transition name="slide">
    <ul v-if=show>
      <li v-for="(item, i) in news" :key=i>
        <a class="urlBlock" :href='`https://www.reddit.com${item.data.permalink}`'>
        <p>Posted by u/{{item.data.author}}</p>
        <h2>{{item.data.title}}</h2>
        <div class="urlSize">
        <a class="urlNews" :href='item.data.url'  target="_blank">{{item.data.url}}</a>
        </div>
        </a>
      </li>
    </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'EverythingNews',
  created(){
        this.$store.dispatch('takeNews')
  },
  computed:{
     news(){
       return this.$store.getters.data
     },
     show(){
       return this.$store.getters.show
     }
  }
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
}

li{
  border-bottom: 1px solid #A6A6A6;
  margin-bottom: 5px;
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
