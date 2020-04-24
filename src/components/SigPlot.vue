<template>
    <div class="sigplot"><slot></slot></div>
</template>

<script>
  import {Plot} from 'sigplot';
  export default {
    name: "SigPlot",
    props: {
      plotOptions: {
        type: Object,
        default: () => {}
      }
    },
    provide() {
      return {
        provider: this.provider
      }
    },
    data() {
      return {
        // By creating the provider in the data property, it becomes reactive,
        // so child components will update when `plot` changes.
        provider: {
          plot: null
        }
      }
    },
    mounted() {
      window.console.log("HELLO, SIGPLOT");
      this.provider.plot = new Plot(this.$el, this.plotOptions);
    },
  }
</script>

<style scoped>
    .sigplot {
        height: 300px;
        width: 300px;
    }
</style>
