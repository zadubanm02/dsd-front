<template>
  <div class="">
      <div class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input v-model="employeeData.firstName" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input v-model="employeeData.lastName" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Email
      </label>
      <input v-model="employeeData.email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="email" placeholder="example@example.com">
    </div>
  </div>
   <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        Job Postion
      </label>
      <input v-model="employeeData.position" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Developer">
    </div>
  </div>
  <div class="-mx-3 md:flex mb-2">
    
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        Department
      </label>
      <div class="relative">
        <select v-model="employeeData.department" class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>Development</option>
          <option>HR</option>
          <option>Sales</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
        Salary
      </label>
      <input v-model="employeeData.salary" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="number" placeholder="1300">
    </div>
  </div>
  <div class="flex my-5 p-2">
      <button @click="createEmployee" class="w-full rounded  bg-teal-500 hover:bg-teal-400 text-white font-semibold p-3"> 
          Add employee
      </button>
  </div>
</div>
  </div>
</template>

<script>
import EmployeesTable from '../components/EmployeesTable';
import axios from 'axios';

export default {
  name: 'NewForm',
  data(){
      return {
          employeeData : {
              firstName:'',
              lastName:'',
              email:'',
              position:'',
              department:'',
              salary:0
          }
      }
  },
  components: {
  },
  methods:{
      createEmployee(){
          console.log("Employee", this.employeeData)
          try {
               axios.post('http://127.0.0.1:8000/api/v1/employees', this.employeeData
            // {
            //     firstName:this.employeeData.firstName,
            //     lastName:this.employeeData.lastName,
            //     email:this.employeeData.email,
            //     position:this.employeeData.position,
            //     department:this.employeeData.department,
            //     salary:this.employeeData.salary
            // }
          ).then(()=>{console.log("Employee was added succesfuly"); location.replace('/')})
          } catch (error) {
              console.log("ERROR", error)
          }
         
      }
  }
};
</script>
