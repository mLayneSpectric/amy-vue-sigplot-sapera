<script>
export default {
  name: "WPipeLayer",
  props: {
    websocket: {
      type: String,
    },
    options: {
      type: Object,
    },
    layerOptions: {
      type: Object,
    },
  },
  watch: {
    websocket(newWebsocket, oldWebsocket) {
      if (newWebsocket !== oldWebsocket) {
        // console.log('The websocket url has changed!')
        if (newWebsocket === null){
          this.$parent.plot.deoverlay();
        }
        else {
          this.$parent.plot.overlay_wpipe(newWebsocket, this.options, this.layerOptions);
        }
      }
    },
    options(newOptions, oldOptions) {
      if (newOptions !== oldOptions) {
        this.$parent.plot.headermod(this.layer, newOptions);
      }
    },
    layerOptions(newLayerOptions, oldLayerOptions) {
      if (newLayerOptions !== oldLayerOptions) {
        this.$parent.plot.change_settings(newLayerOptions);
      }
    },
  },
  created() {
    const plot = this.$parent.plot;
    if (!plot) {
      return;
    }
    // start by setting the header of the pipe
    if (this.websocket !== null){
      // console.log('Creating WPIPE plot')
      // console.log(this.websocket)
      this.layer = this.$parent.plot.overlay_wpipe(
            this.websocket,
            this.options,
            this.layerOptions
          );
    }
    
  },
  render() {
    return null;
  },
};
</script>
