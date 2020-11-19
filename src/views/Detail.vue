<template>
  <div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "EmployeeRow",
  data () {
    return {
      employee: {},
    }
  },
  mounted () {
    axios
      .get(`http://127.0.0.1:8000/api/v1/employees/${id}`)
      .then(response => {
        this.employee = response.data.data;    
      })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
