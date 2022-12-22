const database = {
    venues: [
        { 
        id: 1,
        venueName: "The Ryman",
        location: "Nashville, Tennessee",
        sqFootage: 60000,
        maxOccupancy:2362
    }, { 
        id: 2,
        venueName: "Red Rocks",
        location: "Denver, Colorado",
        sqFootage: 30000,
        maxOccupancy: 9525
    },{ 
        id: 3,
        venueName: "Sydney Opera House",
        location: "Sydney, Australia",
        sqFootage: 484376,
        maxOccupancy: 2679
    },{ 
        id: 4,
        venueName: "Royal Albert Hall",
        location: "London, England",
        sqFootage: 20000,
        maxOccupancy: 5272
    },{ 
        id: 5,
        venueName: "Madison Square Garden",
        location: "New York City, New York",
        sqFootage: 820000,
        maxOccupancy: 20789
    }
    ],
    bands: [
        { 
            id: 1,
            bandName: "Death Cab for Cutie",
            members: 5,
            genre: "Alternative",
            estab: 1997
        },
        { 
            id: 2,
            bandName: "Mumford and Sons",
            members: 3,
            genre: "Alternative",
            estab: 2007,
        },
        { 
            id: 3,
            bandName: "Weezer",
            members: 4,
            genre: "Pop-Punk",
            estab: 1992
        },
        { 
            id: 4,
            bandName:"blink-182",
            members: 3,
            genre: "Pop-Punk",
            estab: 1992
        },
        { 
            id: 5,
            bandName:"Bleachers",
            members: 1,
            genre:"Indie",
            estab: 2014
        },
        { 
            id: 6,
            bandName: "Arcade Fire",
            members: 5,
            genre:"Indie",
            estab: 2001
        },
        { 
            id: 7,
            bandName: "Alt-J",
            members: 3,
            genre: "Indie",
            estab: 2007
        },
        { 
            id: 8,
            bandName:"Young the Giant",
            members: 5,
            genre: "Alternative",
            estab: 2004
        },
        { 
            id: 9,
            bandName:"Dashboard Confessional",
            members: 6,
            genre: "Alternative",
            estab: 1999
        },
        { 
            id: 10,
            bandName: "Fleet Foxes",
            members: 5,
            genre: "Indie",
            estab: 2006
        }
    ],
bookings: [
    {
        id: 1,
        bandsId: 1,
        venueId: 5,
        bookingDate: "12/20/2022"
    }, {
        id: 2,
        bandsId: 7,
        venueId: 4,
        bookingDate: "9/19/2017"
    }, {
        id: 3,
        bandsId: 10,
        venueId: 3,
        bookingDate: "5/01/2018"
    }, {
        id: 4,
        bandsId: 4,
        venueId: 2,
        bookingDate: "3/02/2021"
    }, {
        id: 5,
        bandsId: 3,
        venueId: 1,
        bookingDate: "01/1/2020"
    }
]
}
export const getBands = () => {
    return database.bands.map(band => ({...band}))
}
export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}
export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}
