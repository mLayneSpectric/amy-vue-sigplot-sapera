<script>
export default {
  name: "ArrayLayer",
  props: {
    plotData: {
      type: Array,
      default() {
        return [];
      },
    },
    options: {
      type: Object,
    },
    layerOptions: {
      type: Object,
    },
  },
  render() {
    console.log("RENDER");
    const plot = this.$parent.plot;
    if (!plot) {
      return;
    }

    plot.overlay_array(this.plotData, this.options, this.layerOptions);
    return null;
  },
};
</script>
