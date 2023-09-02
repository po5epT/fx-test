<template>
    <DefaultLayout>
        <div
            class="mx-auto text-center pt-md-5 pb-md-3"
            style="max-width: 720px"
        >
            <h1 class="display-3">Pricing</h1>

            <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>

        <div class="container">
            <ALoader v-if="isLoading" />

            <h5
                v-if="error"
                class="text-danger text-center"
            >
                {{ error }}
            </h5>

            <div
                v-if="tariffs.length"
                class="cards"
            >
                <ATariffCard
                    v-for="tariff in tariffs"
                    :key="tariff.pk"
                    :tariff="tariff"
                    :fields="tariffFields"
                />
            </div>
        </div>
    </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { useAsyncData } from '@/composables/useAsyncData.ts';
import { getTariffs, GetTariffsResponse } from '@/api/tariffs.ts';
import DefaultLayout from '@/layouts/default/DefaultLayout.vue';
import ATariffCard from '@/components/ATariffCard.vue';
import ALoader from '@/components/ALoader.vue';

export default defineComponent({
    components: {
        DefaultLayout,
        ATariffCard,
        ALoader,
    },

    setup() {
        const {
            isLoading,
            response,
            error,
        } = useAsyncData<GetTariffsResponse>(() => getTariffs());

        const tariffs = computed(() => response.value?.results || []);
        const tariffFields = computed(() => response.value?.fields || []);

        return {
            isLoading,

            error,

            tariffs,
            tariffFields,
        };
    }
});
</script>
