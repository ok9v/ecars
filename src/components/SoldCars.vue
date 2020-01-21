<template>
  <div id="divgchart">
    <GChart
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>
<script>
  import {GChart} from 'vue-google-charts'

  export default {
    components: {
      GChart
    },
    data () {
      return {
        chartData: [
          ['Car', 'Quantity'],
          ['NISSAN', 70],
          ['TESLA', 6],
          ['BMW', 5],
          ['OTHER', 19]
        ],
        chartOptions: {
          chart: {
            title: 'Sold electric cars in Ukraine',
            subtitle: '',
          },
          chartArea:{left:20,top:0,width:'80%',height:500},
          is3D: true
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
