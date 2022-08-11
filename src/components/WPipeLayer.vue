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
        console.log('The websocket url has changed!');
        this.$parent.plot.deoverlay();
        if (newWebsocket === null){
          this.layer = null;
        }
        else {
          console.log('This layer (ws):  '+ this.layer);
          this.layer = this.$parent.plot.overlay_wpipe(newWebsocket, this.options, this.layerOptions);
        }
      }
    },
    options(newOptions, oldOptions) {
      if (newOptions !== oldOptions) {
        console.log('Options have changed!');
        console.log('This layer (options):  ' + this.layer);
        if (this.layer !== null) {
          this.$parent.plot.headermod(this.layer.layer_n, newOptions);

        }
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
      this.layer = this.$parent.plot.overlay_wpipe(
            this.websocket,
            this.options,
            this.layerOptions
          );
    }
    else{
      this.layer = null;
    }

  },
  render() {
    return null;
  },
};
</script>
