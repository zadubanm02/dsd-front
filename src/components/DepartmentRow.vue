<template>
        <div class="flex justify-between rounded-full p-4">
           <h3 class="font-extrabold text-gray-600 text-lg mx-3 "> {{ firstName }} {{lastName}}</h3>
           <span class="bg-teal-100 rounded-full px-2">
            <h3 class="font-extrabold text-gray-500 text-lg"> {{department}} </h3>
           </span>
        </div>
</template>

<script>

export default {
  name: 'DepartmentRow',
  components: {
  },
  props:{
      firstName:{
          type:String
      },
      lastName:{
          type:String
      },
      department:{
          type:String
      }
  }
};
</script>
