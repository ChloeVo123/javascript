// a method is just a object property whose value is a function 

let restaurant = {
    name: "Basil Town",
    guestCapacity: 75,
    guestCount: 0,
    checkAvalability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatsParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatsParty(72)
console.log(restaurant.checkAvalability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvalability(4))