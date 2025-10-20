import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
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
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server,{
    listen:{port:4001}
});
console.log('Server ready at port', 4001)

