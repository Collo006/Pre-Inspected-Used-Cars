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