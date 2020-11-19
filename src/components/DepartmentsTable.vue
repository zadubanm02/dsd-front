<template>
<div>


<table class="min-w-full divide-y divide-gray-200 rounded-full ">
            <thead class="bg-white font-extrabold" @click='isVisible1 = !isVisible1' @keydown.enter="isVisible1 = !isVisible1">
              <tr>
                <th
                  class="flex items-center px-6 py-3 bg-gray-50 text-left leading-4 text-2xl text-gray-500 uppercase tracking-wider"
                >
                <button type="button" class="inline-flex items-center justify-between px-2 py-1 font-large text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
      <span class="text-2xl font-extrabold uppercase">Development</span>
      <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 ml-1">
        <path :class="{ 'rotate-180': isVisible1 }" class="transition duration-300 ease-in-out origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </button>
                </th>
                
              </tr>
            </thead>
            <tbody class="" v-show="isVisible1" v-for='row in development' :key='row.id'>
                <DepartmentRow :firstName='row.firstName' :lastName='row.lastName' :department="row.department"/>
            </tbody>
          </table>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white font-extrabold" @click='isVisible2 = !isVisible2' @keydown.enter="isVisible2 = !isVisible2">
              <tr>
                <th
                  class="flex items-center px-6 py-3 bg-gray-50 text-left leading-4 text-2xl text-gray-500 uppercase tracking-wider"
                >
                <button type="button" class="inline-flex items-center justify-between px-2 py-1 font-large text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
      <span class="text-2xl font-extrabold uppercase">Sales</span>
      <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 ml-1">
        <path :class="{ 'rotate-180': isVisible2 }" class="transition duration-300 ease-in-out origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </button>
                </th>
                
              </tr>
            </thead>
            <tbody class="" v-show="isVisible2" v-for='row in sales' :key='row.id'>
              <tr>
                  <DepartmentRow :firstName='row.firstName' :lastName='row.lastName' :department="row.department"/>
              </tr>
            </tbody>
          </table>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white font-extrabold" @click='isVisible3 = !isVisible3' @keydown.enter="isVisible3 = !isVisible3">
              <tr>
                <th
                  class="flex items-center px-6 py-3 bg-gray-50 text-left leading-4 text-2xl text-gray-500 uppercase tracking-wider"
                >
                <button type="button" class="inline-flex items-center justify-between px-2 py-1 font-large text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
      <span class="text-2xl font-extrabold uppercase">Human Resources</span>
      <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 ml-1">
        <path :class="{ 'rotate-180': isVisible3 }" class="transition duration-300 ease-in-out origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </button>
                </th>
                
              </tr>
            </thead>
            <tbody class="" v-show="isVisible3" v-for='row in hr' :key='row.id'>
              <tr>
                <DepartmentRow :firstName='row.firstName' :lastName='row.lastName' :department="row.department"/>
              </tr>
            </tbody>
          </table>
  </div>
</template>

<script>
import axios from 'axios';
import DepartmentRow from './DepartmentRow'
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'DepartmentsTable',
  components: {
      DepartmentRow,

  },
  data(){
      return {
          isVisible1:false,
          isVisible2:false,
          isVisible3:false,
          isVisible:false,
          options :{
          
        },
      series: [44, 55, 41, 17, 15]
          }
          
  },
  props:{
    development:{type:Array}, sales:{type:Array}, hr:{type:Array}
  },

  
};
</script>
