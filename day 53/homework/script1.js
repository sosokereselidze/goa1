const car = {
    name: "Mercedes Benz",
    color: "White",
    model: "190e",
    doors: 4,
    engine: {
        horsePower: 190,
        km: 185,
        power: 80,
        cilindre: 8,
    },

    getEngine: function(){
        return car.engine;
    }
}


console.log(car.engine)
console.log(car.getEngine)