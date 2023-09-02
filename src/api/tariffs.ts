import { delay } from '@/utils/delay.js';
import tariffsJson from '@/tariffs.json';
import { Tariff, TariffField } from '@/types/Tariff.ts';

export type GetTariffsResponse = {
    fields: TariffField[],
    results: Tariff[],
}

export const getTariffs = async <R>(): Promise<R> => {
    await delay(1500);

    // for test
    // throw new Error('There was an error when receiving tariffs!');

    return tariffsJson as R;
}
