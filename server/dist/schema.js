export const typeDefs = `#graphql
type Car{
    id:ID!
    model: String!
    location:String!

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
type Query{
    cars:[Car]
    carspecifications: [CarSpecification]
    carshistory:[CarHistory]
    
}
`