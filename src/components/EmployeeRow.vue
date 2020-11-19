<template>
  <tr>
    <td class="px-6 py-4 text-left">
      <div class="flex items-start">
        <div class="ml-4">
          <div class="text-sm leading-5 font-medium text-gray-900">
            {{ firstName }} {{ lastName }}
          </div>
          <div class="text-sm leading-5 text-gray-500">
            {{ email }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 text-left">
      <div class="text-sm leading-5 text-gray-900">
        {{ position }}
      </div>
      <div class="text-sm leading-5 text-gray-500">
        {{ department }}
      </div>
    </td>

    <td class="px-6 py-4 text-left">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        {{ salary }}
      </span>
    </td>
    <td class="px-6 py-4 text-left">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800"
      >
        {{ salary }}
      </span>
    </td>
    <td class="px-6 py-4 text-left text-sm leading-5 font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900 m-3 p-3">Edit</a>
      <button class="m-3 text-red-600 hover:text-red-900" @click='remove(id)' >Delete</button>
    </td>
  </tr>
</template>

<script>
import axios from 'axios';

export default {
  name: "EmployeeRow",
  props: {
    firstName: {
    },
    // remove :{
    //   type:Function
    // },
    lastName: {
    },
    email: {
    },
    position: {
    },
    department: {
    },
    salary: {
    },
    id:{

    }
  },
  methods:{
    remove(id){
        console.log("id ONE", id)
        axios.delete(`http://127.0.0.1:8000/api/v1/employees/${id}`)
        .then(()=>console.log('Successfuly deleted'))
        location.reload()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
