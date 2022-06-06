<template>
  <div id="app">
    <SigPlot id="plot1" :plot-options="{ xi: !btnToggle }">
      <ArrayLayer :plot-data="random" />
    </SigPlot>
    <SigPlot id="plot2">
      <HrefLayer :href="hrefData" />
    </SigPlot>
    <SigPlot id="plot3">
      <PipeLayer :pipe-data="random" :options="{type: 2000, subsize: 1000}"/>
    </SigPlot>
    <SigPlot id="plot4">
      <WPipeLayer :websocket="ws" :layer-options="{layerType: '1D'}"/>
    </SigPlot>
    <button id="toggler" @click="btnToggle = !btnToggle">Toggle Data</button>
  </div>
</template>

<script>
import SigPlot from "./components/SigPlot";
import ArrayLayer from "./components/ArrayLayer";
import HrefLayer from "./components/HrefLayer";
import PipeLayer from "./components/PipeLayer";
import WPipeLayer from "./components/WPipeLayer";

export default {
  name: "App",
  components: {
    SigPlot,
    ArrayLayer,
    HrefLayer,
    PipeLayer,
    WPipeLayer
  },
  computed: {
    hrefData() {
      return this.btnToggle ? this.href1 : this.href2
    },
  },
  data() {
    return {
      btnToggle: false,
      href1: "https://sigplot.lgsinnovations.com/dat/penny.prm",
      href2: "https://sigplot.lgsinnovations.com/dat/sin.tmp",
      random: [],
      random2D: [],
      generateDataInterval: 0,
      ws: "ws://localhost:9877"
    }
  },
  beforeDestroy() {
    clearInterval(this.generateDataInterval)
  },
  mounted() {
    this.generateData()
  },
  methods: {
    generateData() {
      this.generateDataInterval = setInterval(() => {
        let random = [];
        let random2D = [];
        for (let i = 0; i < 1000; i += 1) {
          random.push(Math.random());
          let tmp = [];
          for (let j = 0; j < 100; j += 1) {
            tmp.push(Math.random());
          }
          random2D.push(tmp);
        }
        this.random = random;
        this.random2D = random2D;
      }, 16);
    }
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
#plot3,
#plot4 {
  display: inline-block;
  height: 400px;
  width: 400px;
    margin: 10px;
}

  #toggler {
    height: 30px;
    width: 100px;
      display: block;
    background: none;
    border:1px solid gray;
    border-radius: 3px;
  }

  #toggler:active {
    box-shadow: inset 0 2px 3px 0 black;
  }
  #toggler:focus {
    outline: none
  }
</style>
