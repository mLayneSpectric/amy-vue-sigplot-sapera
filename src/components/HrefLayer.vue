<script>
export default {
  name: "ArrayLayer",
  props: {
    href: {
      type: String,
    },
    onload: {
      type: Function,
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

    plot.overlay_href(this.href, this.onload, this.layerOptions);
    return null;
  },
};
</script>
