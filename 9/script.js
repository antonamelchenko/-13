window.onload = async function () {
    try {
        let visa = await Promise.all([getTickets(1), getHotel(2)]).then(function(value) {
            return getVisa(value[0], value[1]).then((v) => { return { num: v.num, ticket: v.ticket, hotel: v.hotel }; });
        });
        console.log(visa);
    } catch (error) {
        console.error(error);
    }
}

var tickets = [ { id: 0, type: "8 flight", cost: 800 },
                  { id: 1, type: "Boy next door", cost: 300 },
                  { id: 2, type: "Airborn", cost: 1000 },
                  { id: 3, type: "Car trip", cost: 200 } ];
var hotels = [ { id: 0, name: "Rich plaza", cost: 1000 },
                 { id: 1, name: "Light house", cost: 350 },
                 { id: 2, name: "Luxe hotel", cost: 600 },
                 { id: 3, name: "Just motel", cost: 150 },
                 { id: 4, name: "Royal bedrooms", cost: 2500} ];

async function getTickets(id) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let success = true;
            if ((success) && (id < tickets.length)) {
                resolve(tickets[id]);
            } else {
                reject("Error while getting tickets!");
            }
        }, 200);
    });
}

async function getHotel(id) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let success = true;
            if ((success) && (id < hotels.length)) {
                resolve(hotels[id]);
            } else {
                reject("Error while getting hotel!");
            }
        }, 500);
    });
}

async function getVisa(ticket = undefined, hotel = undefined) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let success = true;
            console.log("Ticket: ", ticket);
            console.log("Hotel: ", hotel);
            if ((success) && (ticket != undefined) && (hotel != undefined)) {
                resolve({ num: Math.floor(Math.random()*8999+1000), ticket: ticket, hotel: hotel });
            } else {
                reject("Error while getting visa!");
            }
        }, 1000);
    });
}