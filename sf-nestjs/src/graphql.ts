
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface FindeArendaInput {
    id: string;
}

export interface ArendaInput {
    startDate?: Date;
    endDate?: Date;
    type?: string;
}

export interface UserArendaInput {
    userId: string;
}

export interface Users {
    id: string;
    fio?: string;
    email?: string;
    phone?: string;
    date?: string;
    number?: string;
    passDate?: string;
    about?: string;
    cod?: string;
    numberLicense?: string;
    dateLicense?: string;
    autos?: Autos[];
    arenda?: Arenda[];
}

export interface Arenda {
    id: string;
    startDay?: Date;
    endDay?: Date;
    cost?: string;
    coment?: string;
    babyChair?: boolean;
    deliveryAuto?: boolean;
    close?: boolean;
    fullTank?: boolean;
    autoId?: string;
    auto?: Autos;
    user?: Users;
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
    arenda?: Arenda[];
    user?: Users;
}

export interface IQuery {
    filterAuto(arendaInput?: ArendaInput): Autos[] | Promise<Autos[]>;
    findeArendaByID(findeArendaInput?: FindeArendaInput): Arenda | Promise<Arenda>;
    userArendaHistory(userArendaInput?: UserArendaInput): Arenda[] | Promise<Arenda[]>;
    getAllAutos(): Autos[] | Promise<Autos[]>;
}

export interface IMutation {
    deleteArenda(findeArendaInput?: FindeArendaInput): Arenda | Promise<Arenda>;
}
