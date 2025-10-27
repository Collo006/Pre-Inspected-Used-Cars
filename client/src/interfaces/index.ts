export type Car = {
    id:string;
    model:string;
    location:string;
    image:string;
};

export type CarsData={
    cars:Car[]
}

export type NewArrival = {
    id:string;
    model:string;
    location:string;
    image:string;
    price:string;
    mileage:string;
    year:string;
    engine_size:string;
};

export type NewArrivalData = {
    newarrivals: NewArrival[]
}
export type SpecialCarDeal={
    id:string;
    model:string;
    year:string;
    price:string;
    mileage:string;
    image:string;
}

export type SpecialCarDealData={
    special_car_deals: SpecialCarDeal[];
}

export type UnitCarData={
    id:string
    unit_car:{
        cars:Car[]
        mileage:string;
        year:string;
        price:string;
    }
}
export interface UnitCarVariable{
    id: string;
}

