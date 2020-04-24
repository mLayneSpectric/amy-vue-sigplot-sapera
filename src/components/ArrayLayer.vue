<script>
  export default {
    name: "ArrayLayer",
    props: {
      plotData: {
        type: Array,
        default() {
          return []
        }
      },
      options: {
        type: Object,
        default() {
          return {}
        }
      },
      layerOptions: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    inject: ['provider'],
    // watch: {
    //   plotData(newData) {
    //     window.console.log("Data changed. newData=" + newData)
    //   },
    //   options(newOptions) {
    //     window.console.log("Options changed. newOptions=" + newOptions)
    //     // deep: true
    //   },
    //   layerOptions(newLayerOptions) {
    //     window.console.log("Options changed. newLayerOptions=" + newLayerOptions)
    //   }
    // },
    // created() {
    //   // If we don't have a plot yet, don't do anything
    //   if (!this.$parent.plot) {
    //     return;
    //   }
    //
    //   console.log(this.plotData);
    //   this.layer = this.$parent.plot.overlay_array(this.plotData, this.options, this.layerOptions);
    // },
    render() {
      console.log("RENDER");
      if (!this.provider.plot) {
        return;
      }

      const plot = this.provider.plot;

      console.log(this.plotData);
      this.layer = plot.overlay_array(this.plotData, this.options, this.layerOptions);
      return null;
    }
  }
</script>

<style scoped>

</style>
