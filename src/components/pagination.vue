<template>
  <div>
      <button class="button prev" @click='prevNews' :disabled="pageCount <= 5 || forbid">PREV</button>
      <button class="button next" @click='nextNews' :disabled="forbid">NEXT</button>
  </div>
</template>

<script>
export default {
    name: 'pagination',
    methods: {
        nextNews(){
            this.$store.dispatch('nextNews')
        },
        prevNews(){
            this.$store.dispatch('prevNews')
        }
    },
    computed: {
        pageCount(){
            return this.$store.getters.count
        },
        forbid(){
            return this.$store.getters.forbid
        }
    }
};
</script>

<style scoped>
.button{
    width: 49%;
    height: 40px;
    background-color: #86A1FD;
    font-size: 22px;
    font-family: inherit;
}
</style>

