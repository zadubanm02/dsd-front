<template>
<div>
  <div class="flex justify-between ">
        <NumberOfEmployees label='Employees Total' :number='numberOfEmployees'/>
        <div class="w-1/2 ml-4">
						<div class="rounded-md p-6 bg-white shadow">
							<div class="mb-2 pb-2">
								<h3 class="font-semibold text-lg text-gray-600">Departments</h3>
								<p class="text-sm text-gray-500">Employees distribution in departments</p>
							</div>
							<div id="chartdiv2" ref="chartdiv" class="w-full" style="height: 240px"></div>
						</div>
					</div>
        <TotalSalary label='Total Salary' :number='totalSalary' />
    </div>
    <div class='flex flex-start my-5'>
      <input class="rounded-full border py-1 pl-3 shadow-lg mr-3" placeholder='Search...' v-model="searchValue" />
      <button @click='search'>Search</button>
    </div>

        
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
        <div
          class="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white font-extrabold">
              <tr>
                <th
                  class="flex items-center px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Position
                </th>
                <th
                  class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Salary
                </th>
                <th
                  class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th class="px-6 py-3 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200" v-for="row in employees" :key="row.id">
             
                <EmployeeRow
                :firstName='row.firstName'
                :lastName='row.lastName'
                :email='row.email'
                :position='row.position'
                :department='row.department'
                :salary='row.salary'
                v-bind:key='row.id'
                :id='row.id'
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>



<script>
import EmployeeRow from "./EmployeeRow";
import axios from 'axios';
import * as vue from 'vue';
import NumberOfEmployees from './NumberOfEployees';
import TotalSalary from './TotalSalary';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default {
  name: "EmployeesTable",
  components: {
    EmployeeRow,
    NumberOfEmployees,
    TotalSalary,
  },
  data () {
    return {
      employees: [],
      numberOfEmployees:0,
      totalSalary:0,
      salaryIcon:'M5.229,6.531H4.362c-0.239,0-0.434,0.193-0.434,0.434c0,0.239,0.194,0.434,0.434,0.434h0.868c0.24,0,0.434-0.194,0.434-0.434C5.663,6.724,5.469,6.531,5.229,6.531 M10,6.531c-1.916,0-3.47,1.554-3.47,3.47c0,1.916,1.554,3.47,3.47,3.47c1.916,0,3.47-1.555,3.47-3.47C13.47,8.084,11.916,6.531,10,6.531 M11.4,11.447c-0.071,0.164-0.169,0.299-0.294,0.406c-0.124,0.109-0.27,0.191-0.437,0.248c-0.167,0.057-0.298,0.09-0.492,0.098v0.402h-0.35v-0.402c-0.21-0.004-0.352-0.039-0.527-0.1c-0.175-0.064-0.324-0.154-0.449-0.27c-0.124-0.115-0.221-0.258-0.288-0.428c-0.068-0.17-0.1-0.363-0.096-0.583h0.664c-0.004,0.259,0.052,0.464,0.169,0.613c0.116,0.15,0.259,0.229,0.527,0.236v-1.427c-0.159-0.043-0.268-0.095-0.425-0.156c-0.157-0.061-0.299-0.139-0.425-0.235C8.852,9.752,8.75,9.631,8.672,9.486C8.594,9.34,8.556,9.16,8.556,8.944c0-0.189,0.036-0.355,0.108-0.498c0.072-0.144,0.169-0.264,0.292-0.36c0.122-0.097,0.263-0.17,0.422-0.221c0.159-0.052,0.277-0.077,0.451-0.077V7.401h0.35v0.387c0.174,0,0.29,0.023,0.445,0.071c0.155,0.047,0.29,0.118,0.404,0.212c0.115,0.095,0.206,0.215,0.274,0.359c0.067,0.146,0.103,0.315,0.103,0.508H10.74c-0.007-0.201-0.06-0.354-0.154-0.46c-0.096-0.106-0.199-0.159-0.408-0.159v1.244c0.174,0.047,0.296,0.102,0.462,0.165c0.167,0.063,0.314,0.144,0.443,0.241c0.128,0.099,0.23,0.221,0.309,0.366c0.077,0.146,0.116,0.324,0.116,0.536C11.509,11.092,11.473,11.283,11.4,11.447 M18.675,4.795H1.326c-0.479,0-0.868,0.389-0.868,0.868v8.674c0,0.479,0.389,0.867,0.868,0.867h17.349c0.479,0,0.867-0.389,0.867-0.867V5.664C19.542,5.184,19.153,4.795,18.675,4.795M1.76,5.664c0.24,0,0.434,0.193,0.434,0.434C2.193,6.336,2,6.531,1.76,6.531S1.326,6.336,1.326,6.097C1.326,5.857,1.52,5.664,1.76,5.664 M1.76,14.338c-0.24,0-0.434-0.195-0.434-0.434c0-0.24,0.194-0.434,0.434-0.434s0.434,0.193,0.434,0.434C2.193,14.143,2,14.338,1.76,14.338 M18.241,14.338c-0.24,0-0.435-0.195-0.435-0.434c0-0.24,0.194-0.434,0.435-0.434c0.239,0,0.434,0.193,0.434,0.434C18.675,14.143,18.48,14.338,18.241,14.338 M18.675,12.682c-0.137-0.049-0.281-0.08-0.434-0.08c-0.719,0-1.302,0.584-1.302,1.303c0,0.152,0.031,0.297,0.08,0.434H2.981c0.048-0.137,0.08-0.281,0.08-0.434c0-0.719-0.583-1.303-1.301-1.303c-0.153,0-0.297,0.031-0.434,0.08V7.318c0.136,0.049,0.28,0.08,0.434,0.08c0.718,0,1.301-0.583,1.301-1.301c0-0.153-0.032-0.298-0.08-0.434H17.02c-0.049,0.136-0.08,0.28-0.08,0.434c0,0.718,0.583,1.301,1.302,1.301c0.152,0,0.297-0.031,0.434-0.08V12.682z M18.241,6.531c-0.24,0-0.435-0.194-0.435-0.434c0-0.24,0.194-0.434,0.435-0.434c0.239,0,0.434,0.193,0.434,0.434C18.675,6.336,18.48,6.531,18.241,6.531 M9.22,8.896c0,0.095,0.019,0.175,0.058,0.242c0.039,0.066,0.088,0.124,0.148,0.171c0.061,0.047,0.13,0.086,0.21,0.115c0.079,0.028,0.11,0.055,0.192,0.073V8.319c-0.21,0-0.322,0.044-0.437,0.132C9.277,8.54,9.22,8.688,9.22,8.896 M15.639,12.602h-0.868c-0.239,0-0.434,0.195-0.434,0.434c0,0.24,0.194,0.436,0.434,0.436h0.868c0.24,0,0.434-0.195,0.434-0.436C16.072,12.797,15.879,12.602,15.639,12.602 M10.621,10.5c-0.068-0.052-0.145-0.093-0.23-0.124c-0.086-0.031-0.123-0.06-0.212-0.082v1.374c0.209-0.016,0.332-0.076,0.465-0.186c0.134-0.107,0.201-0.281,0.201-0.516c0-0.11-0.02-0.202-0.062-0.277C10.743,10.615,10.688,10.551,10.621,10.5',
      searchValue:'',
      chartData:{
        development:0,
        hr:0,
        sales:0,
      }
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/api/v1/employees')
      .then(response => {
        this.employees = response.data.data;
        console
        console.log(response.data.data.length)
        this.numberOfEmployees = response.data.data.length;
        response.data.data.forEach((item)=>{
          this.totalSalary+=item.salary
          item.department == "development" ? this.chartData.development+=1 : this.chartData.development+=0
          item.department == "HR" ? this.chartData.hr+=1 : this.chartData.hr += 0
          item.department == "sales" ? this.chartData.sales+=1 : this.chartData.sales+=0
        })
      })
      .then(()=>this.charts(this.chartData, this.numberOfEmployees))

      
  },
  methods:{
    charts(chartData, numberOfEmployees){
      am4core.useTheme(am4themes_animated);

				// Create chart instance
				var chart = am4core.create(this.$refs.chartdiv, am4charts.RadarChart);


				chart.data = [{
					"category": "Sales",
					"value": chartData.sales/numberOfEmployees * 100,
					"full": numberOfEmployees
				}, {
					"category": "Human Resources",
					"value": chartData.hr/numberOfEmployees * 100,
					"full": numberOfEmployees
				},{
					"category": "Development",
					"value": chartData.development/numberOfEmployees * 100,
					"full": numberOfEmployees
				}]

				// Make chart not full circle
				chart.startAngle = -90;
				chart.endAngle = 180;
				chart.innerRadius = am4core.percent(20);

				// Set number format
				chart.numberFormatter.numberFormat = "#.#'%'";

				// Create axes
				var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
				categoryAxis.dataFields.category = "category";
				categoryAxis.renderer.grid.template.location = 0;
				categoryAxis.renderer.grid.template.strokeOpacity = 0;
				categoryAxis.renderer.labels.template.horizontalCenter = "right";
				categoryAxis.renderer.labels.template.fontWeight = 500;
				categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
					return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
				});
				categoryAxis.renderer.minGridDistance = 10;

				var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
				valueAxis.renderer.grid.template.strokeOpacity = 0;
				valueAxis.min = 0;
				valueAxis.max = 100;
				valueAxis.strictMinMax = true;

				// Create series
				var series1 = chart.series.push(new am4charts.RadarColumnSeries());
				series1.dataFields.valueX = "full";
				series1.dataFields.categoryY = "category";
				series1.clustered = false;
				series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
				series1.columns.template.fillOpacity = 0.08;
				series1.columns.template.cornerRadiusTopLeft = 20;
				series1.columns.template.strokeWidth = 0;
				series1.columns.template.radarColumn.cornerRadius = 20;

				var series2 = chart.series.push(new am4charts.RadarColumnSeries());
				series2.dataFields.valueX = "value";
				series2.dataFields.categoryY = "category";
				series2.clustered = false;
				series2.columns.template.strokeWidth = 0;
				series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
				series2.columns.template.radarColumn.cornerRadius = 20;

				series2.columns.template.adapter.add("fill", function (fill, target) {
					return chart.colors.getIndex(target.dataItem.index);
				});

				// Add cursor
				chart.cursor = new am4charts.RadarCursor();
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
    },
    search(){
    if(this.searchValue == ''){
      axios
      .get('http://127.0.0.1:8000/api/v1/employees')
      .then(response => {
        this.totalSalary = 0
        this.numberOfEmployees = 0
        this.employees = response.data.data;
        console
        console.log(response.data.data.length)
        this.numberOfEmployees = response.data.data.length;
        response.data.data.forEach((item)=>{
          this.totalSalary+=item.salary
        })
      })
    }else{
      this.totalSalary= 0
      this.numberOfEmployees = 0
     const results = this.employees.filter(person =>
      person.lastName.toLowerCase().includes(this.searchValue)
    );
    results.forEach(result=>{
      this.totalSalary+=result.salary
    })
    this.employees = results;
    this.numberOfEmployees = results.length;
    }
    },
    remove(id){
      console.log("id ONE", id)
        axios.delete(`http://127.0.0.1:8000/api/v1/employees/${id}`)
        .then(()=>console.log('Successfuly deleted'))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
