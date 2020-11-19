<template>
  <div class="home  p-3">
    <h1 class="flex flex-start text-xl font-extrabold text-5xl my-5 p-3">
      Employees
    </h1>
  
    <EmployeesTable />
  </div>
</template>

<script>
import EmployeesTable from '../components/EmployeesTable';

export default {
  name: 'Home',
  components: {
    EmployeesTable,
  },
};
</script>
