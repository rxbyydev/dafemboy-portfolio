<template>
    <span class="icon" v-html="svg" aria-hidden="true"></span>
</template>
<script>
import { icons } from '@/assets/icons.js'

export default {
    props: {
        name: { type: String, required: true }
    },
    computed: {
        svg() {
            return icons[this.name] || ''
        }
    }
}
</script>
<style lang="scss">
.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1;
    vertical-align: -0.125em;

    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
    }
}
</style>
