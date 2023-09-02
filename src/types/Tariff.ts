type TariffFields = {
    pk: number,
    name: string,
    price: number,
}

type TariffExtraFields = {
    bandwith: string,
    cores: number,
    hdd_space: string,
    memory: string,
}

export type Tariff = TariffFields & TariffExtraFields;

export type TariffExtraFieldKey = keyof TariffExtraFields;
export type TariffField = [TariffExtraFieldKey, string];
