export const typeDefs = `#graphql
type Car{
    id:ID!
    model: String!
    location:String!
    image: String!

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
}
type Accessories{
    jack_spanner:String!
    spare_wheel:String!
}
type Tires{
    left_front:String!
    right_front:String!
    left_rear:String!
    right_rear:String!
}
type Query{
    cars:[Car]
    carspecifications: [CarSpecification]
    carshistory:[CarHistory]
    interiors:[Interior]
    exteriors:[Exterior]
    suspensions:[Suspension]
    accessory:[Accessories]
    tire:[Tires]
    
}
`;
