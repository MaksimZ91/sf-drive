
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    id?: string;
}

export interface Autos {
    id: string;
    mark?: string;
    model?: string;
    year?: string;
    number?: string;
    vin?: string;
    collor?: string;
    volume?: string;
    power?: string;
    transmission?: string;
    mileage?: string;
    pts?: string;
    price?: string;
    priceThreeDays?: string;
    priceFiveDays?: string;
    osago?: string;
    kasko?: string;
    privod?: string;
    motor?: string;
    body?: string;
    sts?: string;
    type?: string;
}

export interface IQuery {
    filterAuto(): Autos[] | Promise<Autos[]>;
}
