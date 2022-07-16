<template>
        <div class="navigation">
    <router-link :to="{ name: 'Home' }" class="v-navigation">Home</router-link>
    <router-link :to="{ name: 'Catalog' }" class="v-navigation" >Catalog</router-link>
    <router-link :to="{ name: 'Contacts' }" class="v-navigation" >Contacts</router-link>
    <router-link :to="{ name: 'Testimonials' }" class="v-navigation" >Testimonials</router-link>
  </div>
</template>

<script>

export default {
   name:'navigationComponents',
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
   flex-wrap: wrap;
  font-family: "Monda";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 39px;
  color: black;
  text-decoration: none;
  padding-left: 20px;
}
.v-navigation:hover {
   color: #fff;
}

</style>