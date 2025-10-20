import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import path from "path";
import { typeDefs } from "./schema.js";
import _db from "./_db.js";
const resolvers = {
    Query: {
        cars() {
            return _db.cars;
        },
        carspecifications() {
            return _db.carspecifications;
        },
        carshistory() {
            return _db.carshistory;
        },
        interiors() {
            return _db.interiors;
        },
        exteriors() {
            return _db.exteriors;
        },
        suspensions() {
            return _db.suspensions;
        },
        accessory() {
            return _db.accessory;
        },
        tire() {
            return _db.tire;
        },
        specific_car(_, args) {
            return _db.cars.find((car) => car.id === args.id);
        },
        unit_car(_, args) {
            return _db.carspecifications.find((car) => car.id === args.id);
        },
        specific_car_history(_, args) {
            return _db.carshistory.find((car) => car.id === args.id);
        },
        specific_car_interior(_, args) {
            return _db.interiors.find((car) => car.id === args.id);
        },
        specific_car_exterior(_, args) {
            return _db.exteriors.find((car) => car.id === args.id);
        },
        specific_car_suspension(_, args) {
            return _db.suspensions.find((car) => car.id === args.id);
        },
        specific_car_accessory(_, args) {
            return _db.accessory.find((car) => car.id === args.id);
        },
        specific_car_tire(_, args) {
            return _db.tire.find((car) => car.id === args.id);
        }
    },
    CarSpecification: {
        cars(parent) {
            return _db.cars.filter((car) => car.unitcar_id === parent.id);
        }
    },
    CarHistory: {
        cars(parent) {
            return _db.cars.filter((car) => car.specificCarHistory_id === parent.id);
        }
    },
    Interior: {
        cars(parent) {
            return _db.cars.filter((car) => car.specificCarInterior_id === parent.id);
        }
    },
    Exterior: {
        cars(parent) {
            return _db.cars.filter((car) => car.specificCarExterior_id === parent.id);
        }
    },
    Suspension: {
        cars(parent) {
            return _db.cars.filter((car) => car.specificCarSuspension_id === parent.id);
        }
    },
    Accessories: {
        cars(parent) {
            return _db.cars.filter((car) => car.specificCarAccessory_id === parent.id);
        }
    },
    Tires: {
        cars(parent) {
            return _db.cars.filter((car) => car.specificCarTire_id === parent.id);
        }
    },
    Car: {
        unit_car(parent) {
            return _db.carspecifications.find((car) => car.id === parent.unitcar_id);
        },
        specific_car_history(parent) {
            return _db.carshistory.find((car) => car.id === parent.specificCarHistory_id);
        },
        specific_car_interior(parent) {
            return _db.interiors.find((car) => car.id === parent.specificCarInterior_id);
        },
        specific_car_exterior(parent) {
            return _db.exteriors.find((car) => car.id === parent.specificCarExterior_id);
        },
        specific_car_suspension(parent) {
            return _db.suspensions.find((car) => car.id === parent.specificCarSuspension_id);
        },
        specific_car_accessory(parent) {
            return _db.accessory.find((car) => car.id === parent.specificCarAccessory_id);
        },
        specific_car_tire(parent) {
            return _db.tire.find((car) => car.id === parent.specificCarTire_id);
        }
    }
};
const app = express();
//serve static images
app.use("/images", express.static(path.join(process.cwd(), "src/images")));
const server = new ApolloServer({
    typeDefs,
    resolvers
});
//start apollo server with express
const PORT = process.env.PORT || 40001;
const { url } = await startStandaloneServer(server, {
    listen: { port: Number(PORT) },
    context: async () => ({ app })
});
console.log(`Server ready at port ${url}`);
