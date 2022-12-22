import { getBands, getVenues, getBookings } from "./database.js"

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

export const Bookings = () => {
    let html =  "<ul>"

    for (const booking of bookings) {
       for(const band of bands) {
         for (const venue of venues){
            if (booking.bandsId === band.id && booking.venueId === venue.id){
                html += `<li id="booking--${booking.id}"> ${band.bandName} are playing at ${venue.venueName} on ${booking.bookingDate}</li>`
            }
         }
       }
    }

    html += "</ul>"

    return html
}


const filterBandsByBooking = (booking) => {
    let bandBooked = null
    for (const band of bands) {
        if (booking.bandsId === band.id) {
            bandBooked = band
        }
    }
    return bandBooked
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
     
        const itemClicked = clickEvent.target

        // Matching Booking
        if (itemClicked.id.startsWith("booking")) {
            const [,bookingPrimaryKey] = itemClicked.id.split("--") 
            
            for (const booking of bookings) {
                if (parseInt(bookingPrimaryKey) === booking.id) {
                    const matchingBooking = filterBandsByBooking(booking)
                    window.alert(`${matchingBooking.bandName} 
                    Genre: ${matchingBooking.genre} 
                    Formed in :${matchingBooking.estab} 
                    Band Members: ${matchingBooking.members}`)

                }
            }
        }
    }
)