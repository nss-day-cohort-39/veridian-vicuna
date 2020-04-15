// Author: Jayson Rice - This component displays the event form after the show event form button is clicked

import { saveEvent } from "./eventProvider.js"

const contentTarget = document.querySelector(".events")
const eventHub = document.querySelector(".container")

// Allows the event form to be invisible until the user presses the button for it
let visibility = false

eventHub.addEventListener("eventFormButtonClicked", customEvent => {
    const formTarget = document.querySelector(".eventFormContainer")
    visibility = !visibility

    if (visibility) {
        formTarget.classList.remove("hide")
    }
    else {
        formTarget.classList.add("hide")
    }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {

        const eventName = document.querySelector("#eventName").value
        const eventDate = document.querySelector("#eventDate").value
        const eventLocation = document.querySelector("#eventLocation").value

        // Make a new object representation of an event
        const newEvent = {
            name: eventName,
            date: eventDate,
            location: eventLocation
        }

        // Change API state and application state
        saveEvent(newEvent)
    }
})

const render = () => {
    
    contentTarget.innerHTML += `
    <div class="eventFormContainer hide">
        <fieldset class="addEventForm">
            <label class="event--label event--name" for="eventName">Event Name:</label>
            <textarea id="eventName"></textarea>
        
            <label class="event--label event--date" for="eventDate">Event Date:</label>
            <input class="label event--date" type="date" name="eventDate" id="eventDate">
       
            <label class="event--label event--location" for="eventLocation">Event Location:</label>
            <textarea id="eventLocation"></textarea>

            <button id="saveEvent">Save Event</button>
        </fieldset>
    </div>
`
}

export const EventForm = () => {
    render()
}
