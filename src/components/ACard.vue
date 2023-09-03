<template>
    <div class="card">
        <div
            v-if="hasHeaderSlot"
            class="card-header"
        >
            <slot name="header">{{ heading }}</slot>
        </div>

        <div
            v-if="hasBodySlot"
            class="card-body"
        >
            <slot>
                <h2 class="card-title">{{ title }}</h2>
            </slot>
        </div>

        <div
            v-if="hasFooterSlot"
            class="card-footer"
        >
            <slot name="footer" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'ATariffCard',

    props: {
        heading: {
            type: String,
            default: null,
        },

        title: {
            type: String,
            default: null,
        },
    },

    setup(props, { slots }) {

        const hasHeaderSlot = computed(() => slots.header || props.heading);
        const hasBodySlot = computed(() => slots.default || props.title);
        const hasFooterSlot = computed(() => slots.footer);

        return {
            hasHeaderSlot,
            hasBodySlot,
            hasFooterSlot,
        }
    },
});
</script>
