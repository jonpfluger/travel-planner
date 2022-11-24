const Location = require("./location")
const Traveller = require("./traveller")
const Trip = require("./trips")



Traveller.hasMany(Trip, {
    foreignKey: "traveller_id",
    onDelete: 'CASCADE'
})

Trip.belongsTo(Traveller, {
    foreignKey: "traveller_id"
})

Location.hasMany(Trip, {
    foreignKey: "location_id",
    onDelete: 'CASCADE'
})

Trip.belongsTo(Location, {
    foreignKey: "location_id"
})



module.exports = {
    Location,
    Traveller,
    Trip
}