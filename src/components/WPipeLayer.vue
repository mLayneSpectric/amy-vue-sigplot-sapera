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
        this.$parent.plot.push(this.layer, newWebsocket, this.options);
      }
    },
    options(newOptions, oldOptions) {
      if (newOptions !== oldOptions) {
        this.$parent.plot.headermod(this.layer, newOptions);
      }
    },
    layerOptions(newLayerOptions, oldLayerOptions) {
      if (newLayerOptions !== oldLayerOptions) {
        this.plot.get_layer(this.layer).change_settings(newLayerOptions);
      }
    },
  },
  created() {
    const plot = this.$parent.plot;
    if (!plot) {
      return;
    }

    // start by setting the header of the pipe
    this.layer = this.$parent.plot.overlay_wpipe(
      this.websocket,
      this.options,
      this.layerOptions
    );

    // if data is provided and non-empty, go ahead and
    // begin plotting data
    if (this.pipeData !== undefined && this.pipeData.length > 0) {
      this.$parent.plot.push(this.layer, this.pipeData);
    }
    return null;
  },
  render() {
    return null;
  },
};
</script>
