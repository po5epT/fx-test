<template>
    <div class="layout-default">
        <slot name="header">
            <TheHeader />
        </slot>

        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/layouts/default/TheHeader.vue';

export default defineComponent({
    name: 'DefaultLayout',

    components: {
        TheHeader,
    },
});
</script>
