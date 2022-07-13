<template>
   <div class="v-logo">
      <div class="logo-icon-wrapper">
         <div class="logo-icon-text">SK</div>
      </div>
      <div class="logo-text">SuperKOKO</div>
   </div>
</template>

<script>

export default {
   name:'v-logo',
   props:{},
   data () {
      return{
         
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
.v-logo {
   width: 200px;
   position: relative;
   display: flex;
   align-content: left;
   flex-direction: row;
   align-items: center;
   text-decoration: none;
   font-size: 24px;
}
.logo-icon-wrapper {
   position: relative;
   width: 45px;
   height: 45px;
   background: black;
}
.logo-icon-text {
   position: absolute;
   color: white;
   font-family: 'Roboto';
   font-style: normal;
   text-decoration: none;
   vertical-align: middle;
   left: 7px;
   top: 9px;
}
.logo-text {
   position: relative;
   margin-left: 5px;
   text-decoration: none;
   font-style: normal;
   font-family: 'Montserrat';
   color: black;
}
</style>