<template>
  <div class="sigplot">
    <slot v-if="plotInitialized"></slot>
  </div>
</template>

<script>
import { Plot } from "sigplot";
export default {
  name: "SigPlot",
  props: {
    plotOptions: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      // By creating the provider in the data property, it becomes reactive,
      // so child components will update when `plot` changes.
      plotInitialized: false,
    };
  },
  mounted() {
    this.plot = new Plot(this.$el, this.plotOptions);
    this.plotInitialized = true;
  },
};
</script>

<style scoped>
.sigplot {
  height: 300px;
  width: 300px;
}
</style>
