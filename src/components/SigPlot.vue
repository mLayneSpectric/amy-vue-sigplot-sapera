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
            }
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
            },
            listeners(newListeners, oldListeners) {
                if (newListeners !== oldListeners) {
                    // Remove all old listeners
                    for (const [what, callback] of Object.entries(oldListeners)) {
                        this.plot.removeListener(what, callback);
                        console.log('Removed ', what, callback);
                    }

                    // Add the new listeners
                    for (const [what, callback] of Object.entries(newListeners)) {
                        this.plot.addListener(what, callback);
                        console.log('Added ', what, callback);
                    }
                }
            }
        },
        mounted() {
            this.plot = new Plot(this.$el, this.plotOptions);
            this.plotInitialized = true;
            this.plot.change_settings(this.plotOptions); // lg_colorbar can't be enabled when the plot is instantiated, so call change_settings after plot is initialized

            for (const [what, callback] of Object.entries(this.listeners)) {
                console.log(what, callback);
                this.plot.addListener(what, callback);
            }
        },
    };
</script>

<style scoped></style>
