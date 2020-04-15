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
        const userId = document.querySelector("#eventUserId").value

        // Make a new object representation of an event
        const newEvent = {
            name: eventName,
            date: eventDate,
            location: eventLocation,
            userId: userId
        }

        // Change API state and application state
        saveEvent(newEvent)
    }
})

const render = (currentUserId) => {
    
    contentTarget.innerHTML += `
    <div class="eventFormContainer  hide">
        <fieldset class="addEventForm box">
        <input type="hidden" id="eventUserId" value="${currentUserId}">
            <label class="event--form--item event--name" for="eventName">Event Name:</label>
            <textarea class="event--form--item" id="eventName"></textarea>
        
            <label class="event--form--item event--date" for="eventDate">Event Date:</label>
            <input class="event--form--item event--date" type="date" name="eventDate" id="eventDate">
       
            <label class="event--form--item event--location" for="eventLocation">Event Location:</label>
            <textarea class="event--form--item" id="eventLocation"></textarea>

            <button class="event--form--item" id="saveEvent">Save Event</button>
        </fieldset>
    </div>
`
}

export const EventForm = (currentUserId) => {
    render(currentUserId)
}
