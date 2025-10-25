export const typeDefs = `#graphql
type Car{
    id:ID!
    model: String!
    location:String!
    image: String!
    unit_car: CarSpecification!
    specific_car_history: CarHistory!
    specific_car_interior: Interior!
    specific_car_exterior: Exterior!
    specific_car_suspension: Suspension!
    specific_car_accessory: Accessories!
    specific_car_tire: Tires!

}
type NewArrival{
    id:ID!
    model:String!
    location:String!
    image:String!
    price:String!
    mileage:String!
    year:String!
    engine_size:String!
}

type CarSpecification{
    id:ID!
    price:String!
    mileage:String!
    engine_size:String!
    engine_power:String!
    fuel:String!
    year:String!
    reg_no:String!
    color:String!
    import:String!
    cars:[Car]
}
type CarHistory{
    insurance_write_off:String!
    not_scrapped:String!
    not_stolen:String!
    original_plate:String!
    original_color:String!
    latest_owner:String!
    inspection_report:String!
    log_book:String!
    cars:[Car]
}
type Interior{
    seats:String!
    dashboard:String!
    roof:String!
    infotainment:String!
    air_conditioner:String!
    switches:String!
    mats:String!
    electrical_system:[String]!
    cars:[Car]
}
type Exterior{
    doors:String!
    paint:String!
    wipers:String!
    windscreen:String!
    headlights:String!
    windows:String!
    bumper:String!
    side_mirrors:String!
    transmission_engine:[String]!
    cars:[Car]
}
type Suspension{
    ball_joints:String!
    arms_suspension:String!
    shock_absorbers:String!
    mounting:String!
    brake_pads:String!
    axels:String!
    bushes:String!
    braking_system:[String]!
    cars:[Car]
}
type Accessories{
    jack_spanner:String!
    spare_wheel:String!
    cars:[Car]
}
type Tires{
    left_front:String!
    right_front:String!
    left_rear:String!
    right_rear:String!
    cars:[Car]
}
type Query{
    cars:[Car]
    specific_car(id:ID!):Car
    newarrivals:[NewArrival]
    new_car_arrival(id:ID!):NewArrival
    carspecifications: [CarSpecification]
    unit_car(id:ID!):CarSpecification
    carshistory:[CarHistory]
    specific_car_history(id:ID!):CarHistory
    interiors:[Interior]
    specific_car_interior(id:ID!):Interior
    exteriors:[Exterior]
    specific_car_exterior(id:ID!):Exterior
    suspensions:[Suspension]
    specific_car_suspension(id:ID!):Suspension
    accessory:[Accessories]
    specific_car_accessory(id:ID!):Accessories
    tire:[Tires]
    specific_car_tire(id:ID!):Tires
    
}
`;
