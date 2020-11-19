<template>
<div>
    <div class="flex p-2">
    <h1 class="flex flex-start text-xl font-extrabold text-5xl my-1 p-3">
      Departments
    </h1>
  </div>
  <div class="flex justify-between p-5 m-3">
        <div class="w-full ml-4">
						<div class="rounded-md p-6 bg-white shadow">
							<div class="mb-2 pb-2">
								<h3 class="font-semibold text-lg text-gray-600">Departments</h3>
								<p class="text-sm text-gray-500">Employees distribution in departments</p>
							</div>
							<div id="chartdiv2" ref="chartdiv" class="w-full" style="height: 240px"></div>
						</div>
					</div>
    </div>
  <div class="flex p-2">

   
   <div class="flex">

   </div>
   <div class="flex">
<DepartmentsTable :development='development' :sales='sales' :hr='hr' />
   </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import DepartmentsTable from '../components/DepartmentsTable';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
  name: 'Departments',
  components: {
    DepartmentsTable,
  },
  data(){
    return {
       isVisible1:false,
       isVisible2:false,
       isVisible3:false,
       isVisible:false,
      development:[],
      sales:[],
      hr:[],
      chartData:{
        development:0,
        hr:0,
        sales:0,
      },
      numberOfEmployees:0,
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/api/v1/employees')
      .then(response => {
        //this.employees = response.data.data;
        console.log("Response data", response.data.data)
        this.development = response.data.data.filter((item)=>item.department == 'development')
        this.sales = response.data.data.filter((item)=>item.department == 'sales')
        this.hr = response.data.data.filter((item)=>item.department == 'HR')
        this.numberOfEmployees = response.data.data.length
        console.log("Response data lenght", this.numberOfEmployees)
        console.log('HRR', this.hr)
        console.log('DEV', this.development)
        console.log('SALES', this.sales)

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
				var chart = am4core.create(this.$refs.chartdiv, am4charts.SlicedChart);
        var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"

				chart.data = [{
					"name": "Sales",
					"value": chartData.sales,
				}, {
					"name": "Human Resources",
					"value": chartData.hr,
				},{
					"name": "Development",
					"value": chartData.development,
				}]

				var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0.5;

series.labelsContainer.width = 200;

chart.legend = new am4charts.Legend();
chart.legend.position = "left";
chart.legend.valign = "bottom";

  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  }
};
</script>
