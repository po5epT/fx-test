<template>
    <div class="card">
        <div class="card-header">{{ tariff.name }}</div>

        <div class="card-body">
            <h2 class="card-title">
                ${{ tariff.price }} /

                <small class="text-muted">mo</small>
            </h2>

            <ul class="list-unstyled mt-3 mb-4">
                <li
                    v-for="[key, value] in fields"
                    :key="key"
                >
                    {{ value }}: {{ tariff[key] }}
                </li>
            </ul>

            <button
                type="button"
                class="btn btn-lg btn-block btn-outline-success"
            >
                Sign up for free
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { Tariff, TariffField } from '@/types/Tariff.ts';

export default defineComponent({
    name: 'ATariffCard',

    props: {
        tariff: {
            type: Object as PropType<Tariff>,
            required: true,
        },

        fields: {
            type: Array as PropType<TariffField[]>,
            required: true,
        },
    },
});
</script>
