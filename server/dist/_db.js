let cars = [
    { id: '1', model: 'Mazda CX-5', location: 'Makuyu', image: "http://localhost:4001/images/car1.jpg", unitcar_id: "1", specificCarHistory_id: "1", specificCarInterior_id: "1", specificCarExterior_id: "1", specificCarSuspension_id: "1", specificCarAccessory_id: "1", specificCarTire_id: "1" },
    { id: '2', model: 'Mazda CX-4', location: 'Makuya', image: "http://localhost:4001/images/car2.jpg", unitcar_id: "2", specificCarHistory_id: "2", specificCarInterior_id: "2", specificCarExterior_id: "2", specificCarSuspension_id: "2", specificCarAccessory_id: "2", specificCarTire_id: "2" },
    { id: '3', model: 'Mazda CX-04', location: 'Makuyaa', image: "http://localhost:4001/images/car3.jpg", unitcar_id: "3", specificCarHistory_id: "3", specificCarInterior_id: "3", specificCarExterior_id: "3", specificCarSuspension_id: "3", specificCarAccessory_id: "3", specificCarTire_id: "3" },
    { id: '4', model: 'Mazda CX-3', location: 'Makuyi', image: "http://localhost:4001/images/car4.jpg", unitcar_id: "4", specificCarHistory_id: "4", specificCarInterior_id: "4", specificCarExterior_id: "4", specificCarSuspension_id: "4", specificCarAccessory_id: "4", specificCarTire_id: "4" },
    { id: '5', model: 'Mazda CX-2', location: 'Makulu', image: "http://localhost:4001/images/car5.jpg", unitcar_id: "5", specificCarHistory_id: "5", specificCarInterior_id: "5", specificCarExterior_id: "5", specificCarSuspension_id: "5", specificCarAccessory_id: "5", specificCarTire_id: "5" },
    { id: '6', model: 'Mazda CX-10', location: 'Makuyus', image: "http://localhost:4001/images/car6.jpg", unitcar_id: "6", specificCarHistory_id: "6", specificCarInterior_id: "6", specificCarExterior_id: "6", specificCarSuspension_id: "6", specificCarAccessory_id: "6", specificCarTire_id: "6" }
];
let carspecifications = [
    { id: '1', price: "200,00", mileage: "300", engine_size: "300cc",
        engine_power: "422 Hp", fuel: "20 km per Liter", year: "2009", reg_no: "KDB 892U",
        color: "yellow" },
    { id: '2', price: "300,00", mileage: "400", engine_size: "500cc",
        engine_power: "412 Hp", fuel: "5 km per Liter", year: "2018", reg_no: "KCB 892U",
        color: "black" },
    { id: '3', price: "320,00", mileage: "190", engine_size: "200cc",
        engine_power: "223 Hp", fuel: "10 km per Liter", year: "2005", reg_no: "KDN 789S",
        color: "white" },
    { id: '4', price: "590,00", mileage: "50", engine_size: "390cc",
        engine_power: "181 Hp", fuel: "20 km per Liter", year: "2009", reg_no: "KCS 157H",
        color: "blue" },
    { id: '5', price: "181,00", mileage: "600", engine_size: "400cc",
        engine_power: "500 Hp", fuel: "20 km per Liter", year: "2012", reg_no: "KBJ 529J",
        color: "silver" },
    { id: '6', price: "195,00", mileage: "300", engine_size: "300cc",
        engine_power: "422 Hp", fuel: "20 km per Liter", year: "2009", reg_no: "KAP 621A",
        color: "maroon" }
];
let carshistory = [
    { id: "1",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color: "yes",
        latest_owner: "yes",
        inspection_report: "yes",
        log_book: "one owner"
    },
    {
        id: "2",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color: "yes",
        latest_owner: "yes",
        inspection_report: "yes",
        log_book: "one owner"
    },
    {
        id: "3",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color: "yes",
        latest_owner: "yes",
        inspection_report: "yes",
        log_book: "one owner"
    },
    {
        id: "4",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color: "yes",
        latest_owner: "yes",
        inspection_report: "yes",
        log_book: "one owner"
    },
    {
        id: "5",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color: "yes",
        latest_owner: "yes",
        inspection_report: "yes",
        log_book: "one owner"
    },
    {
        id: "6",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color: "yes",
        latest_owner: "yes",
        inspection_report: "yes",
        log_book: "one owner"
    }
];
let interiors = [
    { id: "1", seats: "good condition", dashboard: " functional", roof: "good condition", infotainment: "functional", air_conditioner: "functional", switches: "functional", mats: "good condition", electrical_system: ["functional", "very good"] },
    { id: "2", seats: "good condition", dashboard: " functional", roof: "good condition", infotainment: "functional", air_conditioner: "functional", switches: "functional", mats: "good condition", electrical_system: ["functional", "very good"] },
    { id: "3", seats: "good condition", dashboard: " functional", roof: "good condition", infotainment: "functional", air_conditioner: "functional", switches: "functional", mats: "good condition", electrical_system: ["functional", "very good"] },
    { id: "4", seats: "good condition", dashboard: " functional", roof: "good condition", infotainment: "functional", air_conditioner: "functional", switches: "functional", mats: "good condition", electrical_system: ["functional", "very good"] },
    { id: "5", seats: "good condition", dashboard: " functional", roof: "good condition", infotainment: "functional", air_conditioner: "functional", switches: "functional", mats: "good condition", electrical_system: ["functional", "very good"] },
    { id: "6", seats: "good condition", dashboard: " functional", roof: "good condition", infotainment: "functional", air_conditioner: "functional", switches: "functional", mats: "good condition", electrical_system: ["functional", "very good"] }
];
let exteriors = [
    { id: "1", doors: "functional", paint: "good condition", windscreen: "good condition", headlights: "functional", windows: "functional", bumper: "good condition", side_mirrors: "good condition", transmission_engine: ["good condition", "very good"], wipers: "functional" },
    { id: "2", doors: "functional", paint: "good condition", windscreen: "good condition", headlights: "functional", windows: "functional", bumper: "good condition", side_mirrors: "good condition", transmission_engine: ["good condition", "very good"], wipers: "functional" },
    { id: "3", doors: "functional", paint: "good condition", windscreen: "good condition", headlights: "functional", windows: "functional", bumper: "good condition", side_mirrors: "good condition", transmission_engine: ["good condition", "very good"], wipers: "functional" },
    { id: "4", doors: "functional", paint: "good condition", windscreen: "good condition", headlights: "functional", windows: "functional", bumper: "good condition", side_mirrors: "good condition", transmission_engine: ["good condition", "very good"], wipers: "functional" },
    { id: "5", doors: "functional", paint: "good condition", windscreen: "good condition", headlights: "functional", windows: "functional", bumper: "good condition", side_mirrors: "good condition", transmission_engine: ["good condition", "very good"], wipers: "functional" },
    { id: "6", doors: "functional", paint: "good condition", windscreen: "good condition", headlights: "functional", windows: "functional", bumper: "good condition", side_mirrors: "good condition", transmission_engine: ["good condition", "very good"], wipers: "functional" }
];
let suspensions = [
    { id: "1", ball_joints: "good condition", arms_suspension: "good condition", shock_absorbers: "good condition", mounting: "good condition", brake_pads: "good condition", axels: "good condition", bushes: "good condition", braking_system: ["good condition", "no errors"] },
    { id: "2", ball_joints: "good condition", arms_suspension: "good condition", shock_absorbers: "good condition", mounting: "good condition", brake_pads: "good condition", axels: "good condition", bushes: "good condition", braking_system: ["good condition", "no errors"] },
    { id: "3", ball_joints: "good condition", arms_suspension: "good condition", shock_absorbers: "good condition", mounting: "good condition", brake_pads: "good condition", axels: "good condition", bushes: "good condition", braking_system: ["good condition", "no errors"] },
    { id: "4", ball_joints: "good condition", arms_suspension: "good condition", shock_absorbers: "good condition", mounting: "good condition", brake_pads: "good condition", axels: "good condition", bushes: "good condition", braking_system: ["good condition", "no errors"] },
    { id: "5", ball_joints: "good condition", arms_suspension: "good condition", shock_absorbers: "good condition", mounting: "good condition", brake_pads: "good condition", axels: "good condition", bushes: "good condition", braking_system: ["good condition", "no errors"] },
    { id: "6", ball_joints: "good condition", arms_suspension: "good condition", shock_absorbers: "good condition", mounting: "good condition", brake_pads: "good condition", axels: "good condition", bushes: "good condition", braking_system: ["good condition", "no errors"] }
];
let accessory = [
    { id: "1", jack_spanner: "available", spare_wheel: "available" },
    { id: "2", jack_spanner: "available", spare_wheel: "available" },
    { id: "3", jack_spanner: "available", spare_wheel: "available" },
    { id: "4", jack_spanner: "available", spare_wheel: "available" },
    { id: "5", jack_spanner: "available", spare_wheel: "available" },
    { id: "6", jack_spanner: "available", spare_wheel: "available" },
];
let tire = [
    { id: "1", left_front: "good condition", right_front: "good condition", left_rear: "bad condition", right_rear: "bad condtion" },
    { id: "2", left_front: "good condition", right_front: "good condition", left_rear: "bad condition", right_rear: "bad condtion" },
    { id: "3", left_front: "good condition", right_front: "good condition", left_rear: "bad condition", right_rear: "bad condtion" },
    { id: "4", left_front: "good condition", right_front: "good condition", left_rear: "bad condition", right_rear: "bad condtion" },
    { id: "5", left_front: "good condition", right_front: "good condition", left_rear: "bad condition", right_rear: "bad condtion" },
    { id: "6", left_front: "good condition", right_front: "good condition", left_rear: "bad condition", right_rear: "bad condtion" },
];
export default { cars, carspecifications, carshistory, interiors, exteriors, suspensions, accessory, tire };
