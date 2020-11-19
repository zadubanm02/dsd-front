<template>
  <div
    class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"
  >
    <a
      class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg 
      dark-mode:text-white focus:outline-none focus:shadow-outline"
      >One Team</a
    >

    <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
        <router-link to="/">
      <a
        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg
         dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white 
         dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 
         focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        >Home</a></router-link>
      >
      <router-link to="/about">
      <a
        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg 
        dark-mode:bg-transparent
         dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 
         dark-mode:focus:text-white 
        dark-mode:hover:text-white dark-mode:text-gray-200 
        hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 
        focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        About</a
      ></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>