<template>
<div class='flex'>
  <div class='flex mr-5'>
    <!-- <SideBar /> -->
    <Navigation />
  </div>
  <div class='flex w-full m-5 '>
    <router-view class='w-full'/>
  </div>
</div>
</template>

<script>
import './output.css';

//import SideBar from './components/SideBar.vue';
import Navigation from './components/Navigation.vue';


export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
