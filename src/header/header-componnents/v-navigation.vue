<template>
        <div class="v-navigation">
    <router-link :to="{ name: 'Home' }" class="button index">home</router-link>
    <router-link :to="{ name: 'Catalog' }">catalog</router-link>
    <router-link :to="{ name: 'Contacts' }">contacts</router-link>
    <router-link :to="{ name: 'Testimonials' }">testimonials</router-link>
  </div>
</template>

<script>

export default {
   name:'v-navigation',
   props:{},
   data () {
      return{
         title:'navigation'
      }
   },
   computed: {},
   methods:{},
   watch:{},
   mounted () {

   },
}
</script>

<style >

.v-navigation  {
  font-family: "Monda";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 39px;
  color: black;
  text-decoration: none;
  padding-left: 40px;
}

</style>