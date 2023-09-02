import { ref, watch, shallowRef, Ref, ShallowRef } from 'vue';
import { errorNotify } from '@/utils/notify.ts';


export type RequestFunction<R> = (args?: any[]) => Promise<R>;

export type RequestConfig = {
    onError?: (errorMessage: string) => void,
};

export type UseAsyncDataReturn<R> = {
    isLoading: Ref<boolean>,
    error: Ref<string | null>,
    response: ShallowRef<Awaited<R> | null>,
    execute: () => void,
}

export const useAsyncData = <R>(requestFn: RequestFunction<R>, config: RequestConfig = {}): UseAsyncDataReturn<R> => {
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const response = shallowRef<Awaited<R> | null>(null);

    const { onError = errorNotify } = config || {};

    const execute = async () => {
        try {
            isLoading.value = true;
            response.value = await requestFn();
        } catch (err) {
            error.value = (err as Error).message;
        } finally {
            isLoading.value = false;
        }
    }

    Promise.resolve().then(() => execute());

    watch(error, (newValue) => {
        if (newValue && typeof onError === 'function') {
            onError(newValue);
        }
    });

    return {
        isLoading,
        error,
        response,

        execute,
    }
}
