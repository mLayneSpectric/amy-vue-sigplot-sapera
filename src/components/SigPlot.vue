<template>
    <div class="sigplot" :style="style">
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
            height: {
                type: Number,
                default: 300,
            },
            width: {
                type: Number,
                default: 300,
            },
            listeners: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        computed: {
            style() {
                return {
                    height: this.height,
                    width: this.width,
                };
            },
        },
        data() {
            return {
                // By creating the provider in the data property, it becomes reactive,
                // so child components will update when `plot` changes.
                plotInitialized: false,
            };
        },
        watch: {
            plotOptions(newPlotOptions, oldPlotOptions) {
                if (newPlotOptions !== oldPlotOptions) {
                    this.plot.change_settings(newPlotOptions);
                }
            },
            height(newHeight, oldHeight) {
                if (newHeight !== oldHeight) {
                    this.plot.checkresize();
                }
            },
            width(newWidth, oldWidth) {
                if (newWidth !== oldWidth) {
                    this.plot.checkresize();
                }
            }
        },
        mounted() {
            this.plot = new Plot(this.$el, this.plotOptions);
            this.plotInitialized = true;

            if (Object.keys(this.listeners).length != 0) {
                for (const [what, callback] of Object.entries(this.listeners)) {
                    console.log(what, callback);
                    this.plot.addListener(what, callback);
                }
            }
        },
    };
</script>

<style scoped></style>
