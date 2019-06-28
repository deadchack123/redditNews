<<<<<<< HEAD
<template>
  <div>
      <button class="button prev" @click='loadItems("before")' :disabled="pageCount == dontChangeThisNumber || !beforeItems || isLoading">PREV</button>
      <p>{{ currentPage }}</p>
      <button class="button next" @click='loadItems("after")' :disabled="!afterItems || isLoading">NEXT</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'pagination',
    methods: {
        loadItems(value){
            this.$root.$emit('loaditems', value);
            let urlForUs = value == 'after' ? this.afterItems : this.beforeItems
            this.$router.push({path: `/${urlForUs}`});
        }
    },
    computed: mapState({
        pageCount: state => state.countForAPI,
        isLoading: state => state.isLoading,
        afterItems: state => state.afterItems,
        beforeItems: state => state.beforeItems,
        dontChangeThisNumber: state => state.dontChangeThisNumber,
        currentPage: state => Math.ceil(state.countForAPI / state.dontChangeThisNumber)
    })
};
</script>

<style scoped>
div{
    display: flex;
    justify-content: space-between;
}
p{
    margin: auto 5px;
}
.button{
    width: 50%;
    padding: 5px 0;
    background-color: #86A1FD;
    font-size: 130%;
    font-family: inherit;
}
</style>

=======
<template>
  <div>
      <button class="button prev" @click='loadItems("before")' :disabled="pageCount == 5 || !beforeItems || isLoading">PREV</button>
      <p>{{ currentPage }}</p>
      <button class="button next" @click='loadItems("after")' :disabled="!afterItems || isLoading">NEXT</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'pagination',
    methods: {
        loadItems(value){
            this.$root.$emit('loaditems', value);
            let urlForUs = value == 'after' ? this.afterItems : this.beforeItems
            this.$router.push({path: `/${urlForUs}`});
        }
    },
    computed: mapState({
        pageCount: state => state.countForAPI,
        isLoading: state => state.isLoading,
        afterItems: state => state.afterItems,
        beforeItems: state => state.beforeItems,
        currentPage: state => state.countForAPI / 5
    })
};
</script>

<style scoped>
div{
    display: flex;
    justify-content: space-between;
}
p{
    margin: auto 5px;
}
.button{
    width: 50%;
    padding: 5px 0;
    background-color: #86A1FD;
    font-size: 130%;
    font-family: inherit;
}
</style>

>>>>>>> 45c174e79905832a6a43771f173fb1169a2a1173
