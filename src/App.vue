<template>
  <div id="app">
    <SigPlot id="plot1">
      <ArrayLayer v-bind:plotData="[1, 2, 3, 4]" />
      <ArrayLayer v-bind:plotData="[4, 3, 2, 1]" />
    </SigPlot>
    <SigPlot id="plot2" v-bind:plot-options="{ xi: true }">
      <ArrayLayer v-bind:plotData="[1, 2, 3, 4]" />
      <ArrayLayer v-bind:plotData="[4, 3, 2, 1]" />
    </SigPlot>
    <SigPlot id="plot3">
      <HrefLayer href="https://sigplot.lgsinnovations.com/dat/penny.prm" />
    </SigPlot>
  </div>
</template>

<script>
import SigPlot from "./components/SigPlot";
import ArrayLayer from "./components/ArrayLayer";
import HrefLayer from "./components/HrefLayer";

export default {
  name: "App",
  components: {
    SigPlot,
    ArrayLayer,
    HrefLayer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#plot1,
#plot2,
#plot3 {
  display: inline-block;
  height: 400px;
  width: 400px;
}
</style>
