import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4"; // Correct for v5
import express from "express";
import path from "path";
import { typeDefs } from "./schema.js";
import _db from "./_db.js";
import cors from "cors";
import bodyParser from "body-parser";

const resolvers={
    Query:{
        cars(){
            return _db.cars
        },
        newarrivals(){
           return _db.newarrivals
        },
        carspecifications(){
            return _db.carspecifications
        },
        carshistory(){
            return _db.carshistory
        },
        interiors(){
            return _db.interiors
        },
        exteriors(){
            return _db.exteriors
        },
        suspensions(){
            return _db.suspensions
        },
        accessory(){
            return _db.accessory
        },
        tire(){
            return _db.tire
        },
        specific_car(_,args){
            return _db.cars.find((car)=>car.id === args.id)
        },
        new_car_arrival(_,args){
            return _db.newarrivals.find((car)=> car.id===args.id)
        },
        unit_car(_,args){
            return _db.carspecifications.find((car)=> car.id=== args.id)
        },
        specific_car_history(_,args){
            return _db.carshistory.find((car)=> car.id=== args.id)
        },
        specific_car_interior(_,args){
            return _db.interiors.find((car)=> car.id===args.id)
        },
        specific_car_exterior(_,args){
            return _db.exteriors.find((car)=> car.id===args.id)
        },
        specific_car_suspension(_,args){
            return _db.suspensions.find((car)=> car.id===args.id)
        },
        specific_car_accessory(_,args){
            return _db.accessory.find((car)=> car.id===args.id)
        },
        specific_car_tire(_,args){
            return _db.tire.find((car)=> car.id===args.id)
        }
     },
     CarSpecification:{
        cars(parent:any){
            return _db.cars.filter((car)=> car.unitcar_id===parent.id)
        }
     },
     CarHistory:{
        cars(parent:any){
            return _db.cars.filter((car)=> car.specificCarHistory_id===parent.id)
        }
     },
     Interior:{
        cars(parent:any){
            return _db.cars.filter((car)=>car.specificCarInterior_id===parent.id)
        }
     },
     Exterior:{
        cars(parent:any){
            return _db.cars.filter((car)=>car.specificCarExterior_id===parent.id)
        }
     },
     Suspension:{
        cars(parent:any){
            return _db.cars.filter((car)=>car.specificCarSuspension_id===parent.id)
        }
     },
     Accessories:{
        cars(parent:any){
            return _db.cars.filter((car)=>car.specificCarAccessory_id===parent.id)
        }
     },
     Tires:{
        cars(parent:any){
            return _db.cars.filter((car)=>car.specificCarTire_id===parent.id)
        }
     },
     Car:{
        unit_car(parent:any){
            return _db.carspecifications.find((car)=> car.id===parent.unitcar_id)
        },
        specific_car_history(parent:any){
            return _db.carshistory.find((car)=> car.id===parent.specificCarHistory_id)
        },
        specific_car_interior(parent:any){
            return _db.interiors.find((car)=>car.id===parent.specificCarInterior_id)
        },
        specific_car_exterior(parent:any){
            return _db.exteriors.find((car)=>car.id===parent.specificCarExterior_id)
        },
        specific_car_suspension(parent:any){
            return _db.suspensions.find((car)=>car.id===parent.specificCarSuspension_id)
        },
        specific_car_accessory(parent:any){
            return _db.accessory.find((car)=>car.id===parent.specificCarAccessory_id)
        },
        specific_car_tire(parent:any){
            return _db.tire.find((car)=>car.id===parent.specificCarTire_id)
        }
     }

}

const app = express();

app.use(cors());

// Debug middleware to check requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Serve static images
app.use("/images", express.static(path.join(process.cwd(), "src/images")));

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const PORT = process.env.PORT || 40001;

async function startServer() {
    await server.start();
    
    // Custom middleware to ensure body is parsed
    const graphqlMiddleware = [
        express.json(),
        (req, res, next) => {
            console.log('Body parsed:', req.body);
            next();
        },
        expressMiddleware(server)
    ];
    
    app.use("/graphql", ...graphqlMiddleware);
    
    app.get("/", (req, res) => {
        res.json({ 
            status: "Server is running",
            graphql: "Available at /graphql",
            images: "Available at /images/{filename}"
        });
    });
    
    app.listen(PORT, () => {
        console.log(` Server running on http://localhost:${PORT}`);
        console.log(` GraphQL at http://localhost:${PORT}/graphql`);
        console.log(` Images at http://localhost:${PORT}/images/`);
    });
}

startServer().catch(console.error);