<template>
    <div id="app">
        <SigPlot id="plot1">
            <ArrayLayer v-bind:plotData="[1, 2, 3, 4]" />
        </SigPlot>
    </div>
</template>

<script>
  import SigPlot from "./components/SigPlot";
  import ArrayLayer from "./components/ArrayLayer";

  export default {
    name: 'App',
    components: {
      SigPlot,
      ArrayLayer
    }
  }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    #plot1 {
        height: 500px;
        width: 500px;
    }
</style>
