import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import  express from "express";
import path from "path";
import { typeDefs } from "./schema.js";
import _db from "./_db.js";

const resolvers={
    Query:{
        cars(){
            return _db.cars
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
        }

    }
}

const app =express();

//serve static images
app.use("/images", express.static(path.join(process.cwd(), "src/images")));

const server = new ApolloServer({
    typeDefs,
    resolvers
});

//start apollo server with express
const PORT = process.env.PORT || 40001;

const { url } = await startStandaloneServer(server,{
    listen:{port:Number(PORT)},
    context:async()=>({app})
});
console.log(`Server ready at port ${url}`)

