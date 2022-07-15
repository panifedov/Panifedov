<template>
   <div class="v-navigation">
    <router-link :to="{ name: 'Home', params:'Home' }" >Home</router-link>
    <router-link :to="{ name: 'Catalog', params:'Catalog' }" >Catalog</router-link>
    <router-link :to="{ name: 'Contacts', params:'Contacts' }" >Contacts</router-link>
    <router-link :to="{ name: 'Testimonials', params:'Testimonials' }" >Testimonials</router-link>
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
router-link {
   padding-left: 20px;
}
.navigation {
   display: flex;
    width: 10%;
    height: 10%;
    /* margin: 0% 0% 0% 12%; */
    flex-direction: row;
    flex-wrap: nowrap;
}
.v-navigation  {
   display: flex;
   flex-wrap: wrap;
  font-family: "Monda";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 39px;
  color: black;
  text-decoration: none;
}

</style>