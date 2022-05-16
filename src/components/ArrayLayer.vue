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
        watch: {
            plotData(newData, oldData) {
                if (newData !== oldData) {
                    this.$parent.plot.reload(this.layer, newData, this.options);
                }
            },
            options(newOptions, oldOptions) {
                if (newOptions !== oldOptions) {
                    this.$parent.plot.headermod(this.layer, newOptions);
                }
            },
            layerOptions(newLayerOptions, oldLayerOptions) {
                if (newLayerOptions !== oldLayerOptions) {
                    // this.plot.get_layer(this.layer).change_settings(newLayerOptions);
                    //uncommented original/above line because was getting errors
                    this.$parent.plot.deoverlay(this.layer); //note: arraylayer needs to clear a specific layer, which is different from HrefLayer
                    this.layer = this.$parent.plot.overlay_array(this.plotData, this.options, this.layerOptions); //change settings did not work on a single array layer
                }
            },
        },
        created() {
            const plot = this.$parent.plot;
            if (!plot) {
                return;
            }

            this.layer = plot.overlay_array(
                this.plotData,
                this.options,
                this.layerOptions
            );
        },
        render() {
            return null;
        },
    };
</script>
