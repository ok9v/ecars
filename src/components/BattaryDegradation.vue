<template>
  <div id="divgchart">
    <vue-charts
      :chart-type="PieChart"
      :columns="columns"
      :rows="rows"
      :options="options"
    ></vue-charts>
  </div>
</template>
<script>


  export default {
    components: {
    },
    data () {
      return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        columns: [
          ['Car', 'Quantity'],
          ['NISSAN', 70],
          ['TESLA', 6],
          ['BMW', 5],
          ['OTHER', 19]
        ],
        options: {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            is3D: true,
          }
        }
      }
    }
  }
</script>

<style>
  #divgchart {

    background-color: #f2f4f7;
  }
</style>
