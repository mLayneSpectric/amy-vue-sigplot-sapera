<script>
    export default {
        name: "HrefLayer",
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
        watch: {
            href(newHref, oldHref) {
                if (newHref !== oldHref) {
                    // this.$parent.plot.deoverlay(this.layer);
                    console.log('Href changed to ' + newHref);
                    if (newHref !== null){
                        this.$parent.plot.deoverlay(); // want to clear all layers, not just a single layer
                        this.$parent.plot.overlay_href(newHref, this.onload, this.layerOptions);
                    }
                }
            },
            layerOptions(newLayerOptions, oldLayerOptions) {
                if (newLayerOptions !== oldLayerOptions) {
                    // this.plot.get_layer(this.layer).change_settings(newLayerOptions);
                    this.$parent.plot.change_settings(newLayerOptions); //uncommented above line because new layer wasn't taking effect
                }
            },
        },
        created() {
            const plot = this.$parent.plot;
            if (!plot) {
                return;
            }
            if (this.href !== null){
                this.layer = plot.overlay_href(this.href, this.onload, this.layerOptions);
            }
        },
        render() {
            return null;
        },
    };
</script>
