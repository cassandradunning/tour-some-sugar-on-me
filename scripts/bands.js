import { getBands, getVenues, getBookings } from "./database.js"

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()


export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.bandName}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [,bandPrimaryKey] = itemClicked.id.split("--")

            // MATCHING BAND
            let matchingBand = null
            for (const band of bands) {
                if(band.id === parseInt(bandPrimaryKey)) {
                    matchingBand = band
                    break
                }
            }
        
            // MATCHING VENUE
            let matchingVenue = null
            for (const booking of bookings) {
                for (const venue of venues){
                    if (booking.bandsId === matchingBand.id && booking.venueId === venue.id) {
                        matchingVenue = venue
                        break
                    }
                }
                if (matchingVenue !== null)
            
        window.alert(`${matchingBand.bandName} are playing at ${matchingVenue.venueName}`)
        }
    }
    }

)