<template>
  <div class="header-container">
    <LogoVue />
    <NavigationVue />
    <CartWidget />
  </div>
</template>

<script>
import LogoVue from "./header/LogoVue.vue";
import NavigationVue from "./header/NavigationVue.vue";
import CartWidget from "./header/CartWidget.vue";
export default {
  components: {
    LogoVue,
    NavigationVue,
    CartWidget
  }
};
</script>
<style>
.header-container {
  margin: 2% 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 2%;
}

.header-childelement {
  text-align: center;
}
</style>
